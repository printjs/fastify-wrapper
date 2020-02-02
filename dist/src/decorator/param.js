"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const reflect_1 = require("../tool/reflect");
function Param(key) {
    return function (target, propertyKey, index) {
        const prev = reflect_1.getMetadata(decorator_key_1.DecoratorKey.Param, target, propertyKey);
        if (prev) {
            prev.push({ key, index });
            return reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Param, prev, target, propertyKey);
        }
        return reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Param, [{ key, index }], target, propertyKey);
    };
}
exports.Param = Param;
