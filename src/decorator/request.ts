import { DecoratorKey } from "../constant/decorator.key";
import { defineMetadata, getMetadata } from "../tool/reflect";

export function Request() {
    return function (target: any, propertyKey: string, index: number) {
        const prev = getMetadata(DecoratorKey.Request, target, propertyKey);
        if (prev) {
            prev.push({ index });
            return defineMetadata(DecoratorKey.Request, prev, target, propertyKey);
        }
        return defineMetadata(DecoratorKey.Request, [{ index }], target, propertyKey);
    };
}
