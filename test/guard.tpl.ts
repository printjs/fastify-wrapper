import { FastifyReply, FastifyRequest } from "fastify";
import { FastifyGuard } from "../src";

export class Guard extends FastifyGuard {
    public preValidation(reqeust: any, reply: any, done: any) {
        done(new TypeError("niubi"));
    }
}

export class Guard1 extends FastifyGuard {
    public preValidation(reqeust: FastifyRequest, reply: FastifyReply<any>, done: any) {
        if (reqeust.body.cond) {
            done();
            return;
        }
        reply.code(403);
        done(new TypeError("niubi"));
    }
}
