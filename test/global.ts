// import test from "ava";
import Fastify, { FastifyInstance } from "fastify";
import { FastifyContainer } from "../src";
import {
    GetController,
    PostController,
    PutController,
} from "./controller.mock";

function buildFastify() {
    const fastify: FastifyInstance = Fastify({ logger: true });
    FastifyContainer({
        fastify,
        controllers: [GetController, PostController, PutController],
        baseUrl: "/api",
    });
    return fastify;
}

export const fastify = buildFastify();

