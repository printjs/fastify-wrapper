import { DecoratorKey } from "../constant/decorator.key";
import { RouteConfigModel } from "../model/route.config.model";
import { defineMetadata } from "../tool/reflect";

export function Version(value: string) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        if (propertyKey && descriptor) {
            defineMetadata(DecoratorKey.Version, new RouteConfigModel({
                value,
            }), target, propertyKey);
        } else {
            defineMetadata(DecoratorKey.Version, new RouteConfigModel({
                value,
            }), target);
        }
    };
}
