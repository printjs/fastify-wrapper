import { DecoratorKey } from "../constant/decorator.key";
import { RouteConfigModel } from "../model/route.config.model";

export function LogLevel(value: string) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        Reflect.defineMetadata(DecoratorKey.LogLevel, new RouteConfigModel({
            level: propertyKey && descriptor ? "function" : "class",
            value,
            functionName: propertyKey,
        }), target);
    };
}
