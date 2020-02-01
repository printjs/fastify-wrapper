import { DecoratorKey } from "../constant/decorator.key";
import { RouteModel } from "../model/route.model";

export class RouteConfigInject {
    public prefixTrailingSlash(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = Reflect.getMetadata(DecoratorKey.PrefixTrailingSlash, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.prefixTrailingSlash = metadata.value;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.prefixTrailingSlash = metadata.value;
        }
        return result;
    }

    public bodyLimit(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = Reflect.getMetadata(DecoratorKey.BodyLimit, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.bodyLimit = metadata.value;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.bodyLimit = metadata.value;
        }
        return result;
    }

    public logLevel(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = Reflect.getMetadata(DecoratorKey.LogLevel, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.logLevel = metadata.value;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.logLevel = metadata.value;
        }
        return result;
    }

    public version(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = Reflect.getMetadata(DecoratorKey.Version, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.version = metadata.value;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.version = metadata.value;
        }
        return result;
    }

    public config(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = Reflect.getMetadata(DecoratorKey.Config, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.config = metadata.value;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.config = metadata.value;
        }
        return result;
    }

}
