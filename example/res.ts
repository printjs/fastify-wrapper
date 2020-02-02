import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
import { FastifyPreSerialization } from "../src/template/preSerialization";

export class ResInterceptor extends FastifyPreSerialization {
    public preSerialization(
        request: FastifyRequest,
        reply: FastifyReply<ServerResponse>,
        payload: any,
        done: (err?: Error, value?: any) => void
    ) {
        console.log(payload);
        done(undefined, { res: payload });
    }
}
