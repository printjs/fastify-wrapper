import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";

export function SetMetadata(key: string, meta: any) {
    return function (target: any, propertyKey?: string) {
        if (propertyKey) {
            Reflect.defineMetadata(DecoratorKey.Metadata, meta, target, propertyKey);
        } else {
            Reflect.defineMetadata(DecoratorKey.Metadata, meta, target);
        }
    };
}

export function GetMetadata(key: string) {
    return function (target: any, propertyKey?: string) {
        if (propertyKey) {
            // return Reflect.getMetadata()
        }
    };
}
