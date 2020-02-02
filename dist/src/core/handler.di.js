"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const widget_key_1 = require("../constant/widget.key");
const http_methods_model_1 = require("../model/http.methods.model");
const reflect_1 = require("../tool/reflect");
const tool_service_1 = require("../tool/tool.service");
const route_config_inject_1 = require("./route.config.inject");
const widget_inject_1 = require("./widget.inject");
const tool = new tool_service_1.ToolService();
class HandlerDI {
    injectService(injectable) {
        const params = reflect_1.getMetadata(decorator_key_1.DecoratorKey.ParamTypes, injectable);
        if (params && params.length > 0) {
            return params.map((param) => {
                if (reflect_1.getMetadata(decorator_key_1.DecoratorKey.Service, param)) {
                    return new param(...this.injectService(param));
                }
                else if (reflect_1.getMetadata(decorator_key_1.DecoratorKey.Inject, param)) {
                    return new param(...this.injectService(param));
                }
                else {
                    return null;
                }
            });
        }
        return [];
    }
    handlerController(controller) {
        return reflect_1.ownKeys(controller.prototype)
            .filter((functionName) => functionName !== "constructor")
            .map((functionName) => {
            const httpHandlers = [
                decorator_key_1.DecoratorKey.POST,
                decorator_key_1.DecoratorKey.GET,
                decorator_key_1.DecoratorKey.PUT,
                decorator_key_1.DecoratorKey.DELETE,
                decorator_key_1.DecoratorKey.PATCH,
                decorator_key_1.DecoratorKey.OPTIONS,
                decorator_key_1.DecoratorKey.HEAD,
            ];
            let result;
            httpHandlers.map((method) => {
                const item = reflect_1.getOwnMetadata(method, controller.prototype, tool.TypeAssertion(functionName));
                if (item) {
                    result = {
                        ...new http_methods_model_1.HttpMethodsModel(item),
                        schema: reflect_1.getOwnMetadata(widget_key_1.WidgetKey.Schema, controller.prototype, tool.TypeAssertion(functionName)),
                    };
                    const widget = new widget_inject_1.WidgetInject();
                    result = widget.guardWidget(controller, tool.TypeAssertion(functionName), result);
                    result = widget.preHandlerWidget(controller, tool.TypeAssertion(functionName), result);
                    result = widget.onRequestWidget(controller, tool.TypeAssertion(functionName), result);
                    result = widget.preParsingWidget(controller, tool.TypeAssertion(functionName), result);
                    result = widget.preSerializationWidget(controller, tool.TypeAssertion(functionName), result);
                    result = widget.onSendWidget(controller, tool.TypeAssertion(functionName), result);
                    result = widget.onResponseWidget(controller, tool.TypeAssertion(functionName), result);
                    const config = new route_config_inject_1.RouteConfigInject();
                    result = config.prefixTrailingSlash(controller, tool.TypeAssertion(functionName), result);
                    result = config.bodyLimit(controller, tool.TypeAssertion(functionName), result);
                    result = config.logLevel(controller, tool.TypeAssertion(functionName), result);
                    result = config.version(controller, tool.TypeAssertion(functionName), result);
                    result = config.config(controller, tool.TypeAssertion(functionName), result);
                }
                return item;
            });
            return result;
        })
            .filter((item) => typeof item.method !== "undefined");
    }
}
exports.HandlerDI = HandlerDI;
