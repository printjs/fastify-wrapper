import { FastifyInstance } from "fastify";
import "reflect-metadata";
import { FastifyGuard } from "../template/guard";
import { IocContainer } from "./ioc.container";


class FastifyOption {
    public fastify!: FastifyInstance;
    public controllers?: (new (...args: any[]) => {})[];
    public baseUrl?: string;
    public useGlobalGuard?: FastifyGuard[];
}

export function FastifyContainer(option: FastifyOption) {
    const {
        fastify,
        controllers,
        baseUrl = "/",
        useGlobalGuard = [],
    } = option;
    const iocContainer = new IocContainer(controllers);
    iocContainer.deploy(fastify, baseUrl);
    iocContainer.deployGuard(fastify, useGlobalGuard);
}
