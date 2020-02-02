"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const widget_key_1 = require("../constant/widget.key");
const process_model_1 = require("../model/process.model");
const reflect_1 = require("../tool/reflect");
function OnResponseWidget(...fns) {
    return function (target, propertyKey, descriptor) {
        reflect_1.defineMetadata(widget_key_1.WidgetKey.OnResponse, new process_model_1.ProcessModel({
            level: propertyKey && descriptor ? "function" : "class",
            fn: fns.map((item) => item.onResponse),
            functionName: propertyKey,
        }), target);
    };
}
exports.OnResponseWidget = OnResponseWidget;
