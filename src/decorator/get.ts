import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";
import { HTTPMethod } from "../constant/http.method";
import { HttpMethodsModel } from "../model/http.methods.model";

export function Get(path?: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("GET:start");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("GET:end");
        Reflect.defineMetadata(DecoratorKey.GET, new HttpMethodsModel({
            handler: descriptor.value,
            path,
            method: HTTPMethod.GET
        }), target, propertyKey);
    };
}
