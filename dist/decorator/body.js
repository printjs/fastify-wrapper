"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const reflect_1 = require("../tool/reflect");
function Body(key) {
    return function (target, propertyKey, index) {
        const prev = reflect_1.getMetadata(decorator_key_1.DecoratorKey.Body, target, propertyKey);
        if (prev) {
            prev.push({ key, index });
            return reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Body, prev, target, propertyKey);
        }
        return reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Body, [{ key, index }], target, propertyKey);
    };
}
exports.Body = Body;
