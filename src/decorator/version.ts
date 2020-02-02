import { DecoratorKey } from "../constant/decorator.key";
import { RouteConfigModel } from "../model/route.config.model";
import { defineMetadata } from "../tool/reflect";

export function Version(value: string) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        defineMetadata(DecoratorKey.Version, new RouteConfigModel({
            level: propertyKey && descriptor ? "function" : "class",
            value,
            functionName: propertyKey,
        }), target);
    };
}
