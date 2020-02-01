import { DecoratorKey } from "../constant/decorator.key";
import { RouteConfigModel } from "../model/route.config.model";
import { IStringKeyValuePair } from "../type/string.key.value.pair";

export function Config(value: IStringKeyValuePair) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        Reflect.defineMetadata(DecoratorKey.Config, new RouteConfigModel({
            level: propertyKey && descriptor ? "function" : "class",
            value,
            functionName: propertyKey,
        }), target);
    };
}
