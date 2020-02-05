import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyOnSend } from "../template/onsend";
import { defineMetadata } from "../tool/reflect";

export function OnSendWidget<T extends FastifyOnSend>(...fns: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        if (propertyKey && descriptor) {
            defineMetadata(WidgetKey.OnSend, new ProcessModel({
                fn: fns.map((item) => item.onSend),
            }), target, propertyKey);
        } else {
            defineMetadata(WidgetKey.OnSend, new ProcessModel({
                fn: fns.map((item) => item.onSend),
            }), target);
        }
    };
}
