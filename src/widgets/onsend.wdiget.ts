import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyOnSend } from "../template/onsend";
import { defineMetadata } from "../tool/reflect";

export function OnSendWidget<T extends FastifyOnSend>(...fns: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        defineMetadata(WidgetKey.OnSend, new ProcessModel({
            level: propertyKey && descriptor ? "function" : "class",
            fn: fns.map((item) => item.onSend),
            functionName: propertyKey,
        }), target);
    };
}
