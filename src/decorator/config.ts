import { DecoratorKey } from "../constant/decorator.key";
import { RouteConfigModel } from "../model/route.config.model";
import { defineMetadata } from "../tool/reflect";
import { IStringKeyValuePair } from "../type/string.key.value.pair";

export function Config(value: IStringKeyValuePair) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        if (propertyKey && descriptor) {
            defineMetadata(DecoratorKey.Config, new RouteConfigModel({
                value,
            }), target, propertyKey);
        } else {
            defineMetadata(DecoratorKey.Config, new RouteConfigModel({
                value,
            }), target);
        }
    };
}
