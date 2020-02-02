"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const reflect_1 = require("../tool/reflect");
function SetMetadata(key, meta) {
    return function (target, propertyKey) {
        if (propertyKey) {
            reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Metadata, meta, target, propertyKey);
        }
        else {
            reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Metadata, meta, target);
        }
    };
}
exports.SetMetadata = SetMetadata;
function GetMetadata(key) {
    return function (target, propertyKey) {
        if (propertyKey) {
        }
    };
}
exports.GetMetadata = GetMetadata;
