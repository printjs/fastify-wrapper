/// <reference types="node" />
import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
export declare abstract class FastifyOnError {
    abstract onError(request: FastifyRequest, reply: FastifyReply<ServerResponse>, error: FastifyError, done: () => void): void;
}
