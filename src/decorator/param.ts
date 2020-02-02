import { DecoratorKey } from "../constant/decorator.key";
import { defineMetadata, getMetadata } from "../tool/reflect";

export function Param(key?: string) {
    return function (target: any, propertyKey: string, index: number) {
        const prev = getMetadata(DecoratorKey.Param, target, propertyKey);
        if (prev) {
            prev.push({ key, index });
            return defineMetadata(DecoratorKey.Param, prev, target, propertyKey);
        }
        return defineMetadata(DecoratorKey.Param, [{ key, index }], target, propertyKey);
    };
}
