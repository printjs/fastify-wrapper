import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export abstract class FastifyOnSend {
    public abstract onSend(
        request: FastifyRequest,
        reply: FastifyReply<ServerResponse>,
        payload: any,
        done: (err?: Error) => void,
    ): void;
}
