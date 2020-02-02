"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const widget_key_1 = require("../constant/widget.key");
const reflect_1 = require("../tool/reflect");
function SchemaWidget(schema) {
    return function (target, propertyKey, descriptor) {
        reflect_1.defineMetadata(widget_key_1.WidgetKey.Schema, schema, target, propertyKey);
    };
}
exports.SchemaWidget = SchemaWidget;
