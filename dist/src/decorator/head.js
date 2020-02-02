"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const http_method_1 = require("../constant/http.method");
const http_methods_model_1 = require("../model/http.methods.model");
const reflect_1 = require("../tool/reflect");
function Head(path) {
    return (target, propertyKey, descriptor) => {
        reflect_1.defineMetadata(decorator_key_1.DecoratorKey.HEAD, new http_methods_model_1.HttpMethodsModel({
            handler: descriptor.value,
            method: http_method_1.HTTPMethod.HEAD,
            path,
        }), target, propertyKey);
    };
}
exports.Head = Head;
