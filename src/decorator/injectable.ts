import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";

export function Injectable<T extends new(...args: any[]) => {}>(target: T) {
    console.log("Injectable:Start");
    console.log(target);
    console.log("Injectable:end");
    Reflect.defineMetadata(DecoratorKey.Service, target, target);
}
