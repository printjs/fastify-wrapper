import { DecoratorKey } from "../constant/decorator.key";
import { RouteModel } from "../model/route.model";
import { getMetadata } from "../tool/reflect";

export class RouteConfigInject {
    public prefixTrailingSlash(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(DecoratorKey.PrefixTrailingSlash, controller.prototype);
        const metadataFunctionLevel = getMetadata(DecoratorKey.PrefixTrailingSlash, controller.prototype, functionName);
        if (metadata) {
            result.prefixTrailingSlash = metadata.value;
        } else if (metadataFunctionLevel) {
            result.prefixTrailingSlash = metadataFunctionLevel.value;
        }
        return result;
    }

    public bodyLimit(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(DecoratorKey.BodyLimit, controller.prototype);
        const metadataFunctionLevel = getMetadata(DecoratorKey.BodyLimit, controller.prototype, functionName);
        if (metadata) {
            result.bodyLimit = metadata.value;
        } else if (metadataFunctionLevel) {
            result.bodyLimit = metadataFunctionLevel.value;
        }
        return result;
    }

    public logLevel(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(DecoratorKey.LogLevel, controller.prototype);
        const metadataFunctionLevel = getMetadata(DecoratorKey.LogLevel, controller.prototype, functionName);
        if (metadata) {
            result.logLevel = metadata.value;
        } else if (metadataFunctionLevel) {
            result.logLevel = metadata.value;
        }
        return result;
    }

    public version(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(DecoratorKey.Version, controller.prototype);
        const metadataFunctionLevel = getMetadata(DecoratorKey.Version, controller.prototype, functionName);
        if (metadata) {
            result.version = metadata.value;
        } else if (metadataFunctionLevel) {
            result.version = metadataFunctionLevel.value;
        }
        return result;
    }

    public config(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(DecoratorKey.Config, controller.prototype);
        const metadataFunctionLevel = getMetadata(DecoratorKey.Config, controller.prototype, functionName);
        if (metadata) {
            result.config = metadata.value;
        } else if (metadataFunctionLevel) {
            result.config = metadataFunctionLevel.value;
        }
        return result;
    }
}
