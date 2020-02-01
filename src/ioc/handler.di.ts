import { DecoratorKey } from "../constant/decorator.key";
import { WidgetKey } from "../constant/widget.key";
import { HttpMethodsModel } from "../model/http.methods.model";
import { RouteModel } from "../model/route.model";
import { ToolService } from "../tool/tool.service";
import { RouteConfigInject } from "./route.config.inject";
import { WidgetInject } from "./widget.inject";

const tool = new ToolService();

export class HandlerDI {
    public injectService(injectable: (new (...args: any[]) => any)): (new (...args: any[]) => any)[] {
        const params: (new (...args: any[]) => any)[] = Reflect.getMetadata(
            DecoratorKey.ParamTypes,
            injectable
        );
        if (params && params.length > 0) {
            return params.map((param) => {
                if (Reflect.getMetadata(DecoratorKey.Service, param)) {
                    return new param(...this.injectService(param));
                } else if (Reflect.getMetadata(DecoratorKey.Inject, param)) {
                    return new param(...this.injectService(param));
                } else {
                    return null;
                }
            });
        }
        return [];
    }

    public handlerController(controller: new (...args: []) => {}): RouteModel[] {
        return Reflect.ownKeys(controller.prototype)
            .filter((functionName) => functionName !== "constructor")
            .map((functionName) => {
                const httpHandlers: string[] = [
                    DecoratorKey.POST,
                    DecoratorKey.GET,
                    DecoratorKey.PUT,
                    DecoratorKey.DELETE,
                    DecoratorKey.PATCH,
                    DecoratorKey.OPTIONS,
                    DecoratorKey.HEAD,
                ];
                let result!: RouteModel;
                httpHandlers.map((method) => {
                    const item = Reflect.getOwnMetadata(
                        method,
                        controller.prototype,
                        tool.TypeAssertion<string>(functionName)
                    );
                    if (item) {
                        result = {
                            ...new HttpMethodsModel(item),
                            schema: Reflect.getOwnMetadata(
                                WidgetKey.Schema,
                                controller.prototype,
                                tool.TypeAssertion<string>(functionName)
                            ),
                        };
                        const widget = new WidgetInject();
                        result = widget.guardWidget(controller, tool.TypeAssertion<string>(functionName), result);
                        result = widget.preHandlerWidget(controller, tool.TypeAssertion<string>(functionName), result);
                        result = widget.onRequestWidget(controller, tool.TypeAssertion<string>(functionName), result);
                        result = widget.preParsingWidget(controller, tool.TypeAssertion<string>(functionName), result);
                        result = widget.preSerializationWidget(
                            controller, tool.TypeAssertion<string>(functionName), result);
                        result = widget.onSendWidget(controller, tool.TypeAssertion<string>(functionName), result);
                        result = widget.onResponseWidget(controller, tool.TypeAssertion<string>(functionName), result);
                        const config = new RouteConfigInject();
                        result = config.prefixTrailingSlash(
                            controller, tool.TypeAssertion<string>(functionName), result);
                        result = config.bodyLimit(controller, tool.TypeAssertion<string>(functionName), result);
                        result = config.logLevel(controller, tool.TypeAssertion<string>(functionName), result);
                        result = config.version(controller, tool.TypeAssertion<string>(functionName), result);
                        result = config.config(controller, tool.TypeAssertion<string>(functionName), result);
                    }
                    return item;
                });
                return result;
            })
            .filter((item) => typeof item.method !== "undefined");
    }
}
