"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const widget_key_1 = require("../constant/widget.key");
const process_model_1 = require("../model/process.model");
const reflect_1 = require("../tool/reflect");
function PreParsingWidget(...fns) {
    return function (target, propertyKey, descriptor) {
        reflect_1.defineMetadata(widget_key_1.WidgetKey.PreParsing, new process_model_1.ProcessModel({
            level: propertyKey && descriptor ? "function" : "class",
            fn: fns.map((item) => item.preParsing),
            functionName: propertyKey,
        }), target);
    };
}
exports.PreParsingWidget = PreParsingWidget;
