import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export abstract class FastifyPreSerialization {
    public abstract preSerialization(
        request: FastifyRequest,
        reply: FastifyReply<ServerResponse>,
        payload: any,
        done: (err?: Error) => void,
    ): void;
}
