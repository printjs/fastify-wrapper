import { DecoratorKey } from "../constant/decorator.key";
import { RouteConfigModel } from "../model/route.config.model";
import { defineMetadata } from "../tool/reflect";

export function PrefixTrailingSlash(value: "both" | "slash" | "no-slash") {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        if (propertyKey && descriptor) {
            defineMetadata(DecoratorKey.PrefixTrailingSlash, new RouteConfigModel({
                value,
            }), target, propertyKey);
        } else {
            defineMetadata(DecoratorKey.PrefixTrailingSlash, new RouteConfigModel({
                value,
            }), target);
        }
    };
}
