/// <reference types="node" />
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
import { FastifyPreSerialization } from "../src/template/preSerialization";
export declare class ResInterceptor extends FastifyPreSerialization {
    preSerialization(request: FastifyRequest, reply: FastifyReply<ServerResponse>, payload: any, done: (err?: Error, value?: any) => void): void;
}
