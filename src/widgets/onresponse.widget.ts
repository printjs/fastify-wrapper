import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyOnResponse } from "../template/onresponse";

export function OnResponseWidget<T extends FastifyOnResponse>(...fns: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        Reflect.defineMetadata(WidgetKey.OnResponse, new ProcessModel({
            level: propertyKey && descriptor ? "function" : "class",
            fn: fns.map((item) => item.onResponse),
            functionName: propertyKey,
        }), target);
    };
}
