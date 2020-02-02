import { FastifyInstance } from "fastify";
import { RouteModel } from "../model/route.model";
import { FastifyGuard } from "../template/guard";
import { FastifyPreSerialization } from "../template/preSerialization";
export declare class IocContainer {
    router: IRouter[];
    constructor(controllers?: (new (...args: any[]) => {})[]);
    deployGuard(fastify: FastifyInstance, guards: FastifyGuard[]): void;
    deployResponseInterceptor(fastify: FastifyInstance, interceptors: FastifyPreSerialization[]): void;
    deploy(fastify: FastifyInstance, baseUrl: string): void;
    private handler;
}
interface IRouter {
    controllerPath: string;
    instance: any;
    route: RouteModel[];
}
export {};
