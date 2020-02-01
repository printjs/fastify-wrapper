import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";

export function Done() {
    return function (target: any, propertyKey: string, index: number) {
        const prev = Reflect.getMetadata(DecoratorKey.Done, target, propertyKey);
        if (prev) {
            prev.push({ index });
            return Reflect.defineMetadata(DecoratorKey.Done, prev, target, propertyKey);
        }
        return Reflect.defineMetadata(DecoratorKey.Done, [{ index }], target, propertyKey);
    };
}


