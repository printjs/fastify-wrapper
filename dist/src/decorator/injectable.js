"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const reflect_1 = require("../tool/reflect");
function Injectable(target) {
    reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Service, target, target);
}
exports.Injectable = Injectable;
