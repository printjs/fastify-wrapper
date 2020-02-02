"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const http_method_1 = require("../constant/http.method");
const http_methods_model_1 = require("../model/http.methods.model");
const reflect_1 = require("../tool/reflect");
function Get(path) {
    return (target, propertyKey, descriptor) => {
        reflect_1.defineMetadata(decorator_key_1.DecoratorKey.GET, new http_methods_model_1.HttpMethodsModel({
            handler: descriptor.value,
            path,
            method: http_method_1.HTTPMethod.GET
        }), target, propertyKey);
    };
}
exports.Get = Get;
