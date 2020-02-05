import { WidgetKey } from "../constant/widget.key";
import { RouteModel } from "../model/route.model";
import { getMetadata } from "../tool/reflect";

export class WidgetInject {
    public guardWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.Guard, controller.prototype);
        const metadataFunctionLevel = getMetadata(WidgetKey.Guard, controller.prototype, functionName);
        if (metadata) {
            result.preValidation = metadata.fn;
        } else if (metadataFunctionLevel) {
            result.preValidation = metadataFunctionLevel.fn;
        }
        return result;
    }

    public preHandlerWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.PreHandler, controller.prototype);
        const metadataFunctionLevel = getMetadata(WidgetKey.PreHandler, controller.prototype, functionName);
        if (metadata) {
            result.preHandler = metadata.fn;
        } else if (metadataFunctionLevel) {
            result.preHandler = metadataFunctionLevel.fn;
        }
        return result;
    }

    public onRequestWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.OnRequest, controller.prototype);
        const metadataFunctionLevel = getMetadata(WidgetKey.OnRequest, controller.prototype, functionName);
        if (metadata) {
            result.onRequest = metadata.fn;
        } else if (metadataFunctionLevel) {
            result.onRequest = metadataFunctionLevel.fn;
        }
        return result;
    }

    public preParsingWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.PreParsing, controller.prototype);
        const metadataFunctionLevel = getMetadata(WidgetKey.PreParsing, controller.prototype, functionName);
        if (metadata) {
            result.preParsing = metadata.fn;
        } else if (metadataFunctionLevel) {
            result.preParsing = metadataFunctionLevel.fn;
        }
        return result;
    }

    public preSerializationWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.PreSerialization, controller.prototype);
        const metadataFunctionLevel = getMetadata(WidgetKey.PreSerialization, controller.prototype, functionName);
        if (metadata) {
            result.preSerialization = metadata.fn;
        } else if (metadataFunctionLevel) {
            result.preSerialization = metadataFunctionLevel.fn;
        }
        return result;
    }

    public onSendWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.OnSend, controller.prototype);
        const metadataFunctionLevel = getMetadata(WidgetKey.OnSend, controller.prototype, functionName);
        if (metadata) {
            result.onSend = metadata.fn;
        } else if (metadataFunctionLevel) {
            result.onSend = metadataFunctionLevel.fn;
        }
        return result;
    }

    public onResponseWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.OnResponse, controller.prototype);
        const metadataFunctionLevel = getMetadata(WidgetKey.OnResponse, controller.prototype, functionName);
        if (metadata) {
            result.onResponse = metadata.fn;
        } else if (metadataFunctionLevel) {
            result.onResponse = metadataFunctionLevel.fn;
        }
        return result;
    }
}
