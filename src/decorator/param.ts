import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";

export function Param(key?: string) {
    return function (target: any, propertyKey: string, index: number) {
        const prev = Reflect.getMetadata(DecoratorKey.Param, target, propertyKey);
        if (prev) {
            prev.push({ key, index });
            return Reflect.defineMetadata(DecoratorKey.Param, prev, target, propertyKey);
        }
        return Reflect.defineMetadata(DecoratorKey.Param, [{ key, index }], target, propertyKey);
    };
}
