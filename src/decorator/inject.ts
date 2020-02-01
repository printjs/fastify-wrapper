import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";

export function Inject(Entity: new (...args: any[]) => {}) {
    return function <T extends new (...args: any[]) => {}>(target: T, propertyKey: string, index: number) {
        Reflect.defineMetadata(DecoratorKey.Inject, {
            index,
            value: Entity,
            target,
        }, Entity);
    };
}
