/// <reference types="node" />
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
export declare abstract class FastifyPreSerialization {
    abstract preSerialization(request: FastifyRequest, reply: FastifyReply<ServerResponse>, payload: any, done: (err?: Error, value?: any) => void): void;
}
