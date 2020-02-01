import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";

export function Controller(path: string) {
    return <T extends new(...args: any[]) => {}>(target: T) => {
        console.log("Controler:start");
        console.log("Controller:end");
        Reflect.defineMetadata(DecoratorKey.Controller, path, target);
    };
}
