import { FastifyReply } from "fastify";
import { ServerResponse } from "http";
import { FastifyOnError } from "../src/template/onerror";

export class Exception extends FastifyOnError {
    public onError(reqeust: any, reply: FastifyReply<ServerResponse>, error: any, done: any) {
        reply.code(504).serialize({ w: "w" });
        // reply.serialize();
        done();
    }
}
