"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const reflect_1 = require("../tool/reflect");
function Inject(Entity) {
    return function (target, propertyKey, index) {
        reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Inject, {
            index,
            value: Entity,
            target,
        }, Entity);
    };
}
exports.Inject = Inject;
