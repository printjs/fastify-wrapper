import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyPreParsing } from "../template/preparsing";

export function PreParsingWidget<T extends FastifyPreParsing>(...fns: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        Reflect.defineMetadata(WidgetKey.PreParsing, new ProcessModel({
            level: propertyKey && descriptor ? "function" : "class",
            fn: fns.map((item) => item.preParsing),
            functionName: propertyKey,
        }), target);
    };
}
