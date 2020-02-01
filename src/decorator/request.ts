import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";

export function Request() {
    return function (target: any, propertyKey: string, index: number) {
        const prev = Reflect.getMetadata(DecoratorKey.Request, target, propertyKey);
        if (prev) {
            prev.push({ index });
            return Reflect.defineMetadata(DecoratorKey.Request, prev, target, propertyKey);
        }
        return Reflect.defineMetadata(DecoratorKey.Request, [{ index }], target, propertyKey);
    };
}
