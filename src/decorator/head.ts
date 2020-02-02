import { DecoratorKey } from "../constant/decorator.key";
import { HTTPMethod } from "../constant/http.method";
import { HttpMethodsModel } from "../model/http.methods.model";
import { defineMetadata } from "../tool/reflect";

export function Head(path?: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        defineMetadata(DecoratorKey.HEAD, new HttpMethodsModel({
            handler: descriptor.value,
            method: HTTPMethod.HEAD,
            path,
        }), target, propertyKey);
    };
}

