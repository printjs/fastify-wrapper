import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";


export class ProcessModel {
    public fn!: PreFunction | AfterFunction[];

    constructor(payload: ProcessModel) {
        const { fn } = payload;
        this.fn = fn;
    }
}

export type PreFunction = (
    request: FastifyRequest,
    reply: FastifyReply<ServerResponse>,
    done: (err?: Error) => void,
) => void;


export type AfterFunction = (
    request: FastifyRequest,
    reply: FastifyReply<ServerResponse>,
    payload: any,
    done: (err?: Error) => void,
) => void;

