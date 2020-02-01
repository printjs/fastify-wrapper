import { DecoratorKey } from "../constant/decorator.key";
import { RouteConfigModel } from "../model/route.config.model";

export function PrefixTrailingSlash(value: "both" | "slash" | "no-slash") {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        Reflect.defineMetadata(DecoratorKey.PrefixTrailingSlash, new RouteConfigModel({
            level: propertyKey && descriptor ? "function" : "class",
            value,
            functionName: propertyKey,
        }), target);
    };
}
