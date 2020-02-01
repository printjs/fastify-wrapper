import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export abstract class FastifyOnRequest {
    public abstract onRequest(
        request: FastifyRequest,
        reply: FastifyReply<ServerResponse>,
        done: (err?: Error) => void,
    ): void;
}
