import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyGuard } from "../template/guard";

export function GuardWidget<T extends FastifyGuard>(...guards: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        Reflect.defineMetadata(WidgetKey.Guard, new ProcessModel({
            level: propertyKey && descriptor ? "function" : "class",
            fn: guards.map((item) => item.preValidation),
            functionName: propertyKey,
        }), target);
    };
}