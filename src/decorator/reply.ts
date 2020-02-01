import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";

export function Reply() {
    return function (target: any, propertyKey: string, index: number) {
        const prev = Reflect.getMetadata(DecoratorKey.Reply, target, propertyKey);
        if (prev) {
            prev.push({ index });
            return Reflect.defineMetadata(DecoratorKey.Reply, prev, target, propertyKey);
        }
        return Reflect.defineMetadata(DecoratorKey.Reply, [{ index }], target, propertyKey);
    };
}

