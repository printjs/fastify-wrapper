import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export abstract class FastifyPreHandler {
    public abstract preHandler(
        request: FastifyRequest,
        reply: FastifyReply<ServerResponse>,
        done: (err?: Error) => void,
    ): void;
}
