import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";

export function Query(key?: string) {
    return function (target: any, propertyKey: string, index: number) {
        const prev = Reflect.getMetadata(DecoratorKey.Query, target, propertyKey);
        if (prev) {
            prev.push({ key, index });
            return Reflect.defineMetadata(DecoratorKey.Query, prev, target, propertyKey);
        }
        return Reflect.defineMetadata(DecoratorKey.Query, [{ key, index }], target, propertyKey);
    };
}
