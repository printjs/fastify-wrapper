import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";
import { HTTPMethod } from "../constant/http.method";
import { HttpMethodsModel } from "../model/http.methods.model";

export function OPTIONS(path?: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("OPTIONS:start");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("OPTIONS:end");
        Reflect.defineMetadata(DecoratorKey.OPTIONS, new HttpMethodsModel({
            handler: descriptor.value,
            method: HTTPMethod.OPTIONS,
            path,
        }), target, propertyKey);
    };
}

