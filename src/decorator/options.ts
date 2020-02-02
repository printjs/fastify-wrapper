import { DecoratorKey } from "../constant/decorator.key";
import { HTTPMethod } from "../constant/http.method";
import { HttpMethodsModel } from "../model/http.methods.model";
import { defineMetadata } from "../tool/reflect";

export function Options(path?: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        defineMetadata(DecoratorKey.OPTIONS, new HttpMethodsModel({
            handler: descriptor.value,
            method: HTTPMethod.OPTIONS,
            path,
        }), target, propertyKey);
    };
}

