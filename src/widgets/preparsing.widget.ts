import { WidgetKey } from "../constant/widget.key";
import { ProcessModel } from "../model/process.model";
import { FastifyPreParsing } from "../template/preparsing";
import { defineMetadata } from "../tool/reflect";

export function PreParsingWidget<T extends FastifyPreParsing>(...fns: T[]) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        if (propertyKey && descriptor) {
            defineMetadata(WidgetKey.PreParsing, new ProcessModel({
                fn: fns.map((item) => item.preParsing),
            }), target, propertyKey);
        } else {
            defineMetadata(WidgetKey.PreParsing, new ProcessModel({
                fn: fns.map((item) => item.preParsing),
            }), target);
        }
    };
}
