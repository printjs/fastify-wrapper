import { WidgetKey } from "../constant/widget.key";
import { RouteModel } from "../model/route.model";
import { getMetadata } from "../tool/reflect";

export class WidgetInject {
    public guardWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.Guard, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.preValidation = metadata.fn;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.preValidation = metadata.fn;
        }
        return result;
    }

    public preHandlerWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.PreHandler, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.preHandler = metadata.fn;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.preHandler = metadata.fn;
        }
        return result;
    }

    public onRequestWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.OnRequest, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.onRequest = metadata.fn;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.onRequest = metadata.fn;
        }
        return result;
    }

    public preParsingWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.PreParsing, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.preParsing = metadata.fn;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.preParsing = metadata.fn;
        }
        return result;
    }

    public preSerializationWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.PreSerialization, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.preSerialization = metadata.fn;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.preSerialization = metadata.fn;
        }
        return result;
    }

    public onSendWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.OnSend, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.onSend = metadata.fn;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.onSend = metadata.fn;
        }
        return result;
    }

    public onResponseWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel) {
        const metadata = getMetadata(WidgetKey.OnResponse, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.onResponse = metadata.fn;
        } else if (
            metadata
            && metadata.level === "function"
            && metadata.functionName === functionName
        ) {
            result.onResponse = metadata.fn;
        }
        return result;
    }
}
