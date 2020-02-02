import { FastifyInstance } from "fastify";
import { FastifyGuard } from "../template/guard";
import { FastifyPreSerialization } from "../template/preSerialization";
declare class FastifyOption {
    fastify: FastifyInstance;
    controllers?: (new (...args: any[]) => {})[];
    baseUrl?: string;
    useGlobalGuard?: FastifyGuard[];
    useGlobalResponseInterceptor?: FastifyPreSerialization[];
}
export declare function FastifyContainer(option: FastifyOption): void;
export {};
