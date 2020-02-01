import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export abstract class FastifyPreParsing {
    public abstract preParsing(
        request: FastifyRequest,
        reply: FastifyReply<ServerResponse>,
        done: (err?: Error) => void,
    ): void;
}
