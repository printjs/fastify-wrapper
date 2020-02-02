"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const reflect_1 = require("../tool/reflect");
const tool_service_1 = require("../tool/tool.service");
const handler_di_1 = require("./handler.di");
const tool = new tool_service_1.ToolService();
class IocContainer {
    constructor(controllers = []) {
        this.router = [];
        const service = new handler_di_1.HandlerDI();
        this.router = controllers.map((controller) => {
            const controllerParams = service.injectService(controller);
            const route = service.handlerController(controller);
            return {
                controllerPath: tool.TypeAssertion(reflect_1.getMetadata(decorator_key_1.DecoratorKey.Controller, controller)),
                instance: new controller(...controllerParams),
                route,
            };
        });
    }
    deployGuard(fastify, guards) {
        guards.map((guard) => {
            fastify.addHook("preValidation", guard.preValidation);
        });
    }
    deployResponseInterceptor(fastify, interceptors) {
        interceptors.map((interceptor) => {
            fastify.addHook("preSerialization", interceptor.preSerialization);
        });
    }
    deploy(fastify, baseUrl) {
        this.router.map((router) => {
            router.route.map((item) => {
                const urls = [item.path];
                urls.unshift(router.controllerPath);
                urls.unshift(baseUrl);
                const options = {
                    method: item.method,
                    url: tool.spliceUrl(urls),
                    handler: (request, reply) => this.handler(request, reply)(router.instance, item.handler),
                };
                if (item.schema) {
                    options.schema = item.schema;
                }
                if (item.preValidation) {
                    options.preValidation = item.preValidation;
                }
                if (item.onRequest) {
                    options.onRequest = item.onRequest;
                }
                if (item.preParsing) {
                    options.preParsing = item.preParsing;
                }
                if (item.preSerialization) {
                    options.preSerialization = item.preSerialization;
                }
                if (item.onSend) {
                    options.onSend = item.onSend;
                }
                if (item.onResponse) {
                    options.onResponse = item.onResponse;
                }
                if (item.prefixTrailingSlash) {
                    options.prefixTrailingSlash = item.prefixTrailingSlash;
                }
                if (item.bodyLimit) {
                    options.bodyLimit = item.bodyLimit;
                }
                if (item.logLevel) {
                    options.logLevel = item.logLevel;
                }
                if (item.version) {
                    options.version = item.version;
                }
                if (item.config) {
                    options.config = item.config;
                }
                fastify.route(options);
            });
        });
    }
    handler(request, reply) {
        return (instance, handler) => {
            const queue = [{
                    array: reflect_1.getMetadata(decorator_key_1.DecoratorKey.Query, instance, handler.name),
                    type: "Query",
                }, {
                    array: reflect_1.getMetadata(decorator_key_1.DecoratorKey.Body, instance, handler.name),
                    type: "Body",
                }, {
                    array: reflect_1.getMetadata(decorator_key_1.DecoratorKey.Param, instance, handler.name),
                    type: "Param",
                }, {
                    array: reflect_1.getMetadata(decorator_key_1.DecoratorKey.Request, instance, handler.name),
                    type: "Request",
                }, {
                    array: reflect_1.getMetadata(decorator_key_1.DecoratorKey.Reply, instance, handler.name),
                    type: "Reply",
                }];
            function getFunctionParams() {
                const payload = [];
                function transKey(type) {
                    switch (type) {
                        case "Query":
                            return request.query;
                        case "Body":
                            return request.body;
                        case "Param":
                            return request.params;
                        case "Request":
                            return request;
                        case "Reply":
                            return reply;
                    }
                }
                queue.map((item) => {
                    if (typeof item.array !== "undefined") {
                        item.array.map((obj) => {
                            const { key, index } = obj;
                            payload.push({
                                value: key ? transKey(item.type)[key] : transKey(item.type),
                                key,
                                index,
                            });
                        });
                    }
                });
                payload.sort((prev, next) => prev.index - next.index);
                return payload.map((item) => item.value);
            }
            return handler.apply(instance, getFunctionParams());
        };
    }
}
exports.IocContainer = IocContainer;
