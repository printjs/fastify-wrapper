import { DecoratorKey } from "../constant/decorator.key";
import { defineMetadata } from "../tool/reflect";

export function Inject(Entity: new (...args: any[]) => {}) {
    return function <T extends new (...args: any[]) => {}>(target: T, propertyKey: string, index: number) {
        defineMetadata(DecoratorKey.Inject, {
            index,
            value: Entity,
            target,
        }, Entity);
    };
}
