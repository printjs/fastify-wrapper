import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyPreHandler } from "../template/prehandler";

export function PreHandlerWidget<T extends FastifyPreHandler>(...preHandlers: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        Reflect.defineMetadata(WidgetKey.PreHandler, new ProcessModel({
            level: propertyKey && descriptor ? "function" : "class",
            fn: preHandlers.map((item) => item.preHandler),
            functionName: propertyKey,
        }), target);
    };
}
