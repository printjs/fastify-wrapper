"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const route_config_model_1 = require("../model/route.config.model");
const reflect_1 = require("../tool/reflect");
function BodyLimit(value) {
    return function (target, propertyKey, descriptor) {
        reflect_1.defineMetadata(decorator_key_1.DecoratorKey.BodyLimit, new route_config_model_1.RouteConfigModel({
            level: propertyKey && descriptor ? "function" : "class",
            value,
            functionName: propertyKey,
        }), target);
    };
}
exports.BodyLimit = BodyLimit;
