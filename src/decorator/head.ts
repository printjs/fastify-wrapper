import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";
import { HTTPMethod } from "../constant/http.method";
import { HttpMethodsModel } from "../model/http.methods.model";

export function Head(path?: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("head:start");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("head:end");
        Reflect.defineMetadata(DecoratorKey.HEAD, new HttpMethodsModel({
            handler: descriptor.value,
            method: HTTPMethod.HEAD,
            path,
        }), target, propertyKey);
    };
}

