"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_key_1 = require("../constant/decorator.key");
const reflect_1 = require("../tool/reflect");
class RouteConfigInject {
    prefixTrailingSlash(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(decorator_key_1.DecoratorKey.PrefixTrailingSlash, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.prefixTrailingSlash = metadata.value;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.prefixTrailingSlash = metadata.value;
        }
        return result;
    }
    bodyLimit(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(decorator_key_1.DecoratorKey.BodyLimit, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.bodyLimit = metadata.value;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.bodyLimit = metadata.value;
        }
        return result;
    }
    logLevel(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(decorator_key_1.DecoratorKey.LogLevel, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.logLevel = metadata.value;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.logLevel = metadata.value;
        }
        return result;
    }
    version(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(decorator_key_1.DecoratorKey.Version, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.version = metadata.value;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.version = metadata.value;
        }
        return result;
    }
    config(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(decorator_key_1.DecoratorKey.Config, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.config = metadata.value;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.config = metadata.value;
        }
        return result;
    }
}
exports.RouteConfigInject = RouteConfigInject;
