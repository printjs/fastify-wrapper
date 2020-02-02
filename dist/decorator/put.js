"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const http_method_1 = require("../constant/http.method");
const http_methods_model_1 = require("../model/http.methods.model");
const reflect_1 = require("../tool/reflect");
function Put(path) {
    return (target, propertyKey, descriptor) => {
        reflect_1.defineMetadata(decorator_key_1.DecoratorKey.PUT, new http_methods_model_1.HttpMethodsModel({
            handler: descriptor.value,
            path,
            method: http_method_1.HTTPMethod.PUT,
        }), target, propertyKey);
    };
}
exports.Put = Put;