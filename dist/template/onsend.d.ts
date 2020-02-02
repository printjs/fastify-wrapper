/// <reference types="node" />
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
export declare abstract class FastifyOnSend {
    abstract onSend(request: FastifyRequest, reply: FastifyReply<ServerResponse>, payload: any, done: (err?: Error) => void): void;
}
