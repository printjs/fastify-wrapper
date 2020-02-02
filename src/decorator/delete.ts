import { DecoratorKey } from "../constant/decorator.key";
import { HTTPMethod } from "../constant/http.method";
import { HttpMethodsModel } from "../model/http.methods.model";
import { defineMetadata } from "../tool/reflect";

export function Delete(path?: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        defineMetadata(DecoratorKey.DELETE, new HttpMethodsModel({
            handler: descriptor.value,
            path,
            method: HTTPMethod.DELETE,
        }), target, propertyKey);
    };
}
