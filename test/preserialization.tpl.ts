import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
import { FastifyPreSerialization } from "../src";

export class SingleRouteFormatResponse extends FastifyPreSerialization {
    public preSerialization(
        request: FastifyRequest,
        reply: FastifyReply<ServerResponse>,
        payload: any,
        done: (err?: Error, value?: any) => void,
    ) {
        done(undefined, { singleRoute: payload });
    }
}
