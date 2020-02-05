import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyPreSerialization } from "../template/preSerialization";
import { defineMetadata } from "../tool/reflect";

export function PreSerializationWidget<T extends FastifyPreSerialization>(...fns: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        if (propertyKey && descriptor) {
            defineMetadata(WidgetKey.PreSerialization, new ProcessModel({
                fn: fns.map((item) => item.preSerialization),
            }), target, propertyKey);
        } else {
            defineMetadata(WidgetKey.PreSerialization, new ProcessModel({
                fn: fns.map((item) => item.preSerialization),
            }), target);
        }
    };
}
