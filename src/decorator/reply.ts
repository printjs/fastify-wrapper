import { DecoratorKey } from "../constant/decorator.key";
import { defineMetadata, getMetadata } from "../tool/reflect";

export function Reply() {
    return function (target: any, propertyKey: string, index: number) {
        const prev = getMetadata(DecoratorKey.Reply, target, propertyKey);
        if (prev) {
            prev.push({ index });
            return defineMetadata(DecoratorKey.Reply, prev, target, propertyKey);
        }
        return defineMetadata(DecoratorKey.Reply, [{ index }], target, propertyKey);
    };
}

