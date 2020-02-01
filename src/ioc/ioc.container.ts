import {
    FastifyInstance,
    FastifyReply,
    FastifyRequest,
    RouteOptions,
} from "fastify";
import { ServerResponse } from "http";
import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";
import { RouteModel } from "../model/route.model";
import { FastifyGuard } from "../template/guard";
import { ToolService } from "../tool/tool.service";
import { HandlerDI } from "./handler.di";

const tool = new ToolService();

export class IocContainer {
    public router: IRouter[] = [];
    constructor(
        controllers: (new (...args: any[]) => {})[] = [],
    ) {
        const service = new HandlerDI();
        this.router = controllers.map((controller) => {
            const controllerParams = service.injectService(controller);
            const route = service.handlerController(controller);
            return {
                controllerPath: tool.TypeAssertion<string>(Reflect.getMetadata(DecoratorKey.Controller, controller)),
                instance: new controller(...controllerParams),
                route,
            };
        });
    }

    public deployGuard(fastify: FastifyInstance, guards: FastifyGuard[]) {
        guards.map((guard) => {
            fastify.addHook("preValidation", guard.preValidation);
        });
    }

    public deploy(fastify: FastifyInstance, baseUrl: string) {
        this.router.map((router) => {
            router.route.map((item) => {
                const urls = [item.path];
                urls.unshift(router.controllerPath);
                urls.unshift(baseUrl);
                const options: RouteOptions = {
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

    private handler(request: FastifyRequest, reply: FastifyReply<ServerResponse>) {
        return (instance: any, handler: (...args: any[]) => any) => {
            const queue: IQueue[] = [{
                array: Reflect.getMetadata(DecoratorKey.Query, instance, handler.name),
                type: "Query",
            }, {
                array: Reflect.getMetadata(DecoratorKey.Body, instance, handler.name),
                type: "Body",
            }, {
                array: Reflect.getMetadata(DecoratorKey.Param, instance, handler.name),
                type: "Param",
            }, {
                array: Reflect.getMetadata(DecoratorKey.Request, instance, handler.name),
                type: "Request",
            }, {
                array: Reflect.getMetadata(DecoratorKey.Reply, instance, handler.name),
                type: "Reply",
            }];

            function getFunctionParams(): any[] {
                const payload: IQueryBodyParam[] = [];
                function transKey(type: FunctionParamsType) {
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
            console.log(instance);
            return handler.apply(instance, getFunctionParams());
        };
    }
}

interface IRouter {
    controllerPath: string;
    instance: any;
    route: RouteModel[];
}

interface IQueryBodyParam {
    key?: string;
    index: number;
    value?: any;
}

type FunctionParamsType = "Query" | "Body" | "Param" | "Request" | "Reply";

interface IQueue {
    array: IQueryBodyParam[];
    type: FunctionParamsType;
}
