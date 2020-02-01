import "reflect-metadata";
import { DecoratorKey } from "../constant/decorator.key";
import { HTTPMethod } from "../constant/http.method";
import { HttpMethodsModel } from "../model/http.methods.model";

export function Delete(path?: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("DELETE:start");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("DELETE:end");
        Reflect.defineMetadata(DecoratorKey.DELETE, new HttpMethodsModel({
            handler: descriptor.value,
            path,
            method: HTTPMethod.DELETE,
        }), target, propertyKey);
    };
}
