import { DecoratorKey } from "../constant/decorator.key";
import { defineMetadata } from "../tool/reflect";

export function Controller(path: string) {
    return <T extends new(...args: any[]) => {}>(target: T) => {
        defineMetadata(DecoratorKey.Controller, path, target);
    };
}
