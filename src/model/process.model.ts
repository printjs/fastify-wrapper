import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";


export class ProcessModel {
    public fn!: PreFunction | AfterFunction[];
    public level!: "class" | "function";
    public functionName?: string;

    constructor(payload: ProcessModel) {
        const { fn, level, functionName } = payload;
        this.fn = fn;
        this.level = level;
        if (functionName) {
            this.functionName = functionName;
        }
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

