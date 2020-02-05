import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyOnResponse } from "../template/onresponse";
import { defineMetadata } from "../tool/reflect";

export function OnResponseWidget<T extends FastifyOnResponse>(...fns: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        if (propertyKey && descriptor) {
            defineMetadata(WidgetKey.OnResponse, new ProcessModel({
                fn: fns.map((item) => item.onResponse),
            }), target, propertyKey);
        } else {
            defineMetadata(WidgetKey.OnResponse, new ProcessModel({
                fn: fns.map((item) => item.onResponse),
            }), target);
        }
    };
}
