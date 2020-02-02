"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const reflect_1 = require("../tool/reflect");
function Done() {
    return function (target, propertyKey, index) {
        const prev = reflect_1.getMetadata(decorator_key_1.DecoratorKey.Done, target, propertyKey);
        if (prev) {
            prev.push({ index });
            return reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Done, prev, target, propertyKey);
        }
        return reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Done, [{ index }], target, propertyKey);
    };
}
exports.Done = Done;
