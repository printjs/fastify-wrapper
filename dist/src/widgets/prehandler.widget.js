"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const widget_key_1 = require("../constant/widget.key");
const process_model_1 = require("../model/process.model");
const reflect_1 = require("../tool/reflect");
function PreHandlerWidget(...preHandlers) {
    return function (target, propertyKey, descriptor) {
        reflect_1.defineMetadata(widget_key_1.WidgetKey.PreHandler, new process_model_1.ProcessModel({
            level: propertyKey && descriptor ? "function" : "class",
            fn: preHandlers.map((item) => item.preHandler),
            functionName: propertyKey,
        }), target);
    };
}
exports.PreHandlerWidget = PreHandlerWidget;
