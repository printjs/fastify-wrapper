import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export abstract class FastifyOnResponse {
    public abstract onResponse(
        request: FastifyRequest,
        reply: FastifyReply<ServerResponse>,
        done: (err?: Error) => void,
    ): void;
}
