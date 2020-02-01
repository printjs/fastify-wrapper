import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";
import { HTTPMethod } from "../constant/http.method";
import { HttpMethodsModel } from "../model/http.methods.model";

export function Post(path?: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("POST:start");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("POST:end");
        Reflect.defineMetadata(DecoratorKey.POST, new HttpMethodsModel({
            handler: descriptor.value,
            method: HTTPMethod.POST,
            path,
        }), target, propertyKey);
    };
}

