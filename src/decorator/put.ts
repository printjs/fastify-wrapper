import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";
import { HTTPMethod } from "../constant/http.method";
import { HttpMethodsModel } from "../model/http.methods.model";

export function Put(path?: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("PUT:start");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("PUT:end");
        Reflect.defineMetadata(DecoratorKey.PUT, new HttpMethodsModel({
            handler: descriptor.value,
            path,
            method: HTTPMethod.PUT,
        }), target, propertyKey);
    };
}


