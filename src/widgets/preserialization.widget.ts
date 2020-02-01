import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyPreSerialization } from "../template/preSerialization";

export function preSerializationWidget<T extends FastifyPreSerialization>(...fns: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        Reflect.defineMetadata(WidgetKey.PreSerialization, new ProcessModel({
            level: propertyKey && descriptor ? "function" : "class",
            fn: fns.map((item) => item.preSerialization),
            functionName: propertyKey,
        }), target);
    };
}
