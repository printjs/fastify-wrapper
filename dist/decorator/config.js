"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const route_config_model_1 = require("../model/route.config.model");
const reflect_1 = require("../tool/reflect");
function Config(value) {
    return function (target, propertyKey, descriptor) {
        reflect_1.defineMetadata(decorator_key_1.DecoratorKey.Config, new route_config_model_1.RouteConfigModel({
            level: propertyKey && descriptor ? "function" : "class",
            value,
            functionName: propertyKey,
        }), target);
    };
}
exports.Config = Config;