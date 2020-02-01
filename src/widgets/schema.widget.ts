import { RouteSchema } from "fastify";
import "reflect-metadata";
import { WidgetKey } from "../constant/widget.key";

export function SchemaWidget(schema: RouteSchema) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(WidgetKey.Schema, schema, target, propertyKey);
    };
}
