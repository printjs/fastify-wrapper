import { FastifyInstance } from "fastify";
import { FastifyGuard } from "../template/guard";
import { FastifyPreSerialization } from "../template/preSerialization";
import { IocContainer } from "./ioc.container";


class FastifyOption {
    public fastify!: FastifyInstance;
    public controllers?: (new (...args: any[]) => {})[];
    public baseUrl?: string;
    public useGlobalGuard?: FastifyGuard[];
    public useGlobalResponseInterceptor?: FastifyPreSerialization[];
}

export function FastifyContainer(option: FastifyOption) {
    const {
        fastify,
        controllers,
        baseUrl = "/",
        useGlobalGuard = [],
        useGlobalResponseInterceptor = [],
    } = option;
    const iocContainer = new IocContainer(controllers);
    iocContainer.deploy(fastify, baseUrl);
    iocContainer.deployGuard(fastify, useGlobalGuard);
    iocContainer.deployResponseInterceptor(fastify, useGlobalResponseInterceptor);
}
