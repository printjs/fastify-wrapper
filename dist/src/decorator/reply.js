"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const reflect_1 = require("../tool/reflect");
function Reply() {
    return function (target, propertyKey, index) {
        const prev = reflect_1.getMetadata(decorator_key_1.DecoratorKey.Reply, target, propertyKey);
        if (prev) {
            prev.push({ index });
            return reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Reply, prev, target, propertyKey);
        }
        return reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Reply, [{ index }], target, propertyKey);
    };
}
exports.Reply = Reply;
