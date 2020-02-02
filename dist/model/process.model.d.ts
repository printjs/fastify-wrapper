/// <reference types="node" />
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
export declare class ProcessModel {
    fn: PreFunction | AfterFunction[];
    level: "class" | "function";
    functionName?: string;
    constructor(payload: ProcessModel);
}
export declare type PreFunction = (request: FastifyRequest, reply: FastifyReply<ServerResponse>, done: (err?: Error) => void) => void;
export declare type AfterFunction = (request: FastifyRequest, reply: FastifyReply<ServerResponse>, payload: any, done: (err?: Error) => void) => void;
