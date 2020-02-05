import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyOnRequest } from "../template/onrequest";
import { defineMetadata } from "../tool/reflect";

export function OnRequestWidget<T extends FastifyOnRequest>(...onRequests: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        if (propertyKey && descriptor) {
            defineMetadata(WidgetKey.OnRequest, new ProcessModel({
                fn: onRequests.map((item) => item.onRequest),
            }), target, propertyKey);
        } else {
            defineMetadata(WidgetKey.OnRequest, new ProcessModel({
                fn: onRequests.map((item) => item.onRequest),
            }), target);
        }
    };
}
