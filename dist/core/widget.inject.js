"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const widget_key_1 = require("../constant/widget.key");
const reflect_1 = require("../tool/reflect");
class WidgetInject {
    guardWidget(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(widget_key_1.WidgetKey.Guard, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.preValidation = metadata.fn;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.preValidation = metadata.fn;
        }
        return result;
    }
    preHandlerWidget(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(widget_key_1.WidgetKey.PreHandler, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.preHandler = metadata.fn;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.preHandler = metadata.fn;
        }
        return result;
    }
    onRequestWidget(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(widget_key_1.WidgetKey.OnRequest, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.onRequest = metadata.fn;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.onRequest = metadata.fn;
        }
        return result;
    }
    preParsingWidget(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(widget_key_1.WidgetKey.PreParsing, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.preParsing = metadata.fn;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.preParsing = metadata.fn;
        }
        return result;
    }
    preSerializationWidget(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(widget_key_1.WidgetKey.PreSerialization, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.preSerialization = metadata.fn;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.preSerialization = metadata.fn;
        }
        return result;
    }
    onSendWidget(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(widget_key_1.WidgetKey.OnSend, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.onSend = metadata.fn;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.onSend = metadata.fn;
        }
        return result;
    }
    onResponseWidget(controller, functionName, result) {
        const metadata = reflect_1.getMetadata(widget_key_1.WidgetKey.OnResponse, controller.prototype);
        if (metadata && metadata.level === "class") {
            result.onResponse = metadata.fn;
        }
        else if (metadata
            && metadata.level === "function"
            && metadata.functionName === functionName) {
            result.onResponse = metadata.fn;
        }
        return result;
    }
}
exports.WidgetInject = WidgetInject;
