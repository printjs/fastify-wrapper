"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_container_1 = require("./ioc.container");
class FastifyOption {
}
function FastifyContainer(option) {
    const { fastify, controllers, baseUrl = "/", useGlobalGuard = [], useGlobalResponseInterceptor = [], } = option;
    const iocContainer = new ioc_container_1.IocContainer(controllers);
    iocContainer.deploy(fastify, baseUrl);
    iocContainer.deployGuard(fastify, useGlobalGuard);
    iocContainer.deployResponseInterceptor(fastify, useGlobalResponseInterceptor);
}
exports.FastifyContainer = FastifyContainer;
