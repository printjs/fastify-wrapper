import { DecoratorKey } from "../constant/decorator.key";
import { defineMetadata } from "../tool/reflect";

export function Injectable<T extends new(...args: any[]) => {}>(target: T) {
    defineMetadata(DecoratorKey.Service, target, target);
}
