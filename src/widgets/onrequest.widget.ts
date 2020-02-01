import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyOnRequest } from "../template/onrequest";

export function OnRequestWidget<T extends FastifyOnRequest>(...onRequests: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        Reflect.defineMetadata(WidgetKey.OnRequest, new ProcessModel({
            level: propertyKey && descriptor ? "function" : "class",
            fn: onRequests.map((item) => item.onRequest),
            functionName: propertyKey,
        }), target);
    };
}
