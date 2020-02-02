import { DecoratorKey } from "../constant/decorator.key";
import { defineMetadata } from "../tool/reflect";

export function SetMetadata(key: string, meta: any) {
    return function (target: any, propertyKey?: string) {
        if (propertyKey) {
            defineMetadata(DecoratorKey.Metadata, meta, target, propertyKey);
        } else {
            defineMetadata(DecoratorKey.Metadata, meta, target);
        }
    };
}

export function GetMetadata(key: string) {
    return function (target: any, propertyKey?: string) {
        if (propertyKey) {
            // return getMetadata()
        }
    };
}
