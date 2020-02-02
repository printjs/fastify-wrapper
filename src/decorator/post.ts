import { DecoratorKey } from "../constant/decorator.key";
import { HTTPMethod } from "../constant/http.method";
import { HttpMethodsModel } from "../model/http.methods.model";
import { defineMetadata } from "../tool/reflect";

export function Post(path?: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        defineMetadata(DecoratorKey.POST, new HttpMethodsModel({
            handler: descriptor.value,
            method: HTTPMethod.POST,
            path,
        }), target, propertyKey);
    };
}

