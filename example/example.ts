import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
import { FastifyContainer } from "../src/core/fastify.container";
import { Controller } from "../src/decorator/controller";
import { Get } from "../src/decorator/get";
import { Injectable } from "../src/decorator/injectable";
import { Post } from "../src/decorator/post";
import { Query } from "../src/decorator/query";
import { Reply } from "../src/decorator/reply";
import { Request } from "../src/decorator/request";
import { GuardWidget } from "../src/widgets/guard.widget";
import { SchemaWidget } from "../src/widgets/schema.widget";
import { GlobalGuard, Guard, Guard1 } from "./guard";
import { ResInterceptor } from "./res";

const fastify = Fastify({ logger: true });

@Injectable
class AnimalService {
    public animal: string = "The animal";
}

@Injectable
class CatService {
    constructor(
        private readonly animalService: AnimalService,
    ) { }
    public getType() { return `${this.animalService.animal} is red cat.`; }
}


@Injectable
class DogService {
    constructor(
        private readonly animalService: AnimalService,
    ) { }
    public getType() { return `${this.animalService.animal} is black dog.`; }
}

@Injectable
export class ZoomService {
    constructor(
        private readonly catService: CatService,
        private readonly dogService: DogService,
    ) { }
    public getDog() {
        return this.dogService.getType();
    }
    public getCat() {
        return this.catService.getType();
    }
}


@Controller()
class ApplicationController {
    constructor(
        private readonly zoomService: ZoomService,
        private readonly animalService: AnimalService,
    ) { }

    @Get("/name")
    @SchemaWidget({ querystring: { name: { type: "string" } } })
    @GuardWidget(new Guard())
    public async function1(
        @Query() query: any,
        @Query("name") name: any,
    ) {
        return {
            query,
            name,
            message: `${this.animalService.animal} is ${name}`,
        };
    }

    @Get("/reply")
    @GuardWidget(new Guard1())
    public reply(@Request() request: FastifyRequest, @Reply() reply: FastifyReply<ServerResponse>) {
        reply.send(this.zoomService.getDog());
    }

    @Post()
    @SchemaWidget({
        body: {
            name: { type: "string" },
            required: ["name"],
        },
    })
    public async formatResponse() {
        return {
            type: this.zoomService.getCat(),
        };
    }
}

FastifyContainer({
    fastify,
    controllers: [ApplicationController],
    useGlobalGuard: [new GlobalGuard()],
    useGlobalResponseInterceptor: [new ResInterceptor()],
    baseUrl: "/app",
});
fastify.addContentTypeParser("application/x-www-form-urlencoded", (req, done) => {
    done(null, req);
});


fastify.listen(9999);
