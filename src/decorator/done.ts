import { DecoratorKey } from "../constant/decorator.key";
import { defineMetadata, getMetadata } from "../tool/reflect";

export function Done() {
    return function (target: any, propertyKey: string, index: number) {
        const prev = getMetadata(DecoratorKey.Done, target, propertyKey);
        if (prev) {
            prev.push({ index });
            return defineMetadata(DecoratorKey.Done, prev, target, propertyKey);
        }
        return defineMetadata(DecoratorKey.Done, [{ index }], target, propertyKey);
    };
}


