import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export abstract class FastifyGuard {
    public abstract preValidation(
        request: FastifyRequest,
        reply: FastifyReply<ServerResponse>,
        done: (err?: Error) => void,
    ): void;
}

