import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export abstract class FastifyOnError {
    public abstract onError(
        request: FastifyRequest,
        reply: FastifyReply<ServerResponse>,
        error: FastifyError,
        done: () => void,
    ): void;
}
