import { RouteSchema } from "fastify";
import { IStringKeyValuePair } from "../type/string.key.value.pair";
import { HttpMethodsModel } from "./http.methods.model";
import { AfterFunction, PreFunction } from "./process.model";

export class RouteModel extends HttpMethodsModel {
    public schema?: RouteSchema;
    public preValidation?: PreFunction;
    public preHandler?: PreFunction;
    public onRequest?: PreFunction;
    public preParsing?: PreFunction;
    public preSerialization?: AfterFunction;
    public onSend?: AfterFunction;
    public onResponse?: PreFunction;
    public prefixTrailingSlash?: "slash" | "no-slash" | "both";
    public bodyLimit?: number;
    public logLevel?: string;
    public version?: string;
    public config?: IStringKeyValuePair;
}
