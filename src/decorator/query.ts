import { DecoratorKey } from "../constant/decorator.key";
import { defineMetadata, getMetadata } from "../tool/reflect";

export function Query(key?: string) {
    return function (target: any, propertyKey: string, index: number) {
        const prev = getMetadata(DecoratorKey.Query, target, propertyKey);
        if (prev) {
            prev.push({ key, index });
            return defineMetadata(DecoratorKey.Query, prev, target, propertyKey);
        }
        return defineMetadata(DecoratorKey.Query, [{ key, index }], target, propertyKey);
    };
}
