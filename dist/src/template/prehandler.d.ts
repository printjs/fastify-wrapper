/// <reference types="node" />
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
export declare abstract class FastifyPreHandler {
    abstract preHandler(request: FastifyRequest, reply: FastifyReply<ServerResponse>, done: (err?: Error) => void): void;
}
