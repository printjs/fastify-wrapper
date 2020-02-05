import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyGuard } from "../template/guard";
import { defineMetadata } from "../tool/reflect";

export function GuardWidget<T extends FastifyGuard>(...guards: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        if (propertyKey && descriptor) {
            defineMetadata(WidgetKey.Guard, new ProcessModel({
                fn: guards.map((item) => item.preValidation),
            }), target, propertyKey);
        } else {
            defineMetadata(WidgetKey.Guard, new ProcessModel({
                fn: guards.map((item) => item.preValidation),
            }), target);
        }
    };
}
