import { DecoratorKey } from "../constant/decorator.key";
import { defineMetadata, getMetadata } from "../tool/reflect";

export function Body(key?: string) {
    return function (target: any, propertyKey: string, index: number) {
        const prev = getMetadata(DecoratorKey.Body, target, propertyKey);
        if (prev) {
            prev.push({ key, index });
            return defineMetadata(DecoratorKey.Body, prev, target, propertyKey);
        }
        return defineMetadata(DecoratorKey.Body, [{ key, index }], target, propertyKey);
    };
}
