import { RouteSchema } from "fastify";
import { IStringKeyValuePair } from "../type/string.key.value.pair";
import { HttpMethodsModel } from "./http.methods.model";
import { AfterFunction, PreFunction } from "./process.model";
export declare class RouteModel extends HttpMethodsModel {
    schema?: RouteSchema;
    preValidation?: PreFunction;
    preHandler?: PreFunction;
    onRequest?: PreFunction;
    preParsing?: PreFunction;
    preSerialization?: AfterFunction;
    onSend?: AfterFunction;
    onResponse?: PreFunction;
    prefixTrailingSlash?: "slash" | "no-slash" | "both";
    bodyLimit?: number;
    logLevel?: string;
    version?: string;
    config?: IStringKeyValuePair;
}
