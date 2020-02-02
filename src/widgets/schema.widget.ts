import { RouteSchema } from "fastify";
import { WidgetKey } from "../constant/widget.key";
import { defineMetadata } from "../tool/reflect";

export function SchemaWidget(schema: RouteSchema) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        defineMetadata(WidgetKey.Schema, schema, target, propertyKey);
    };
}
