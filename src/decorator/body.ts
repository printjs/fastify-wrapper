import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";

export function Body(key?: string) {
    return function (target: any, propertyKey: string, index: number) {
        const prev = Reflect.getMetadata(DecoratorKey.Body, target, propertyKey);
        if (prev) {
            prev.push({ key, index });
            return Reflect.defineMetadata(DecoratorKey.Body, prev, target, propertyKey);
        }
        return Reflect.defineMetadata(DecoratorKey.Body, [{ key, index }], target, propertyKey);
    };
}
