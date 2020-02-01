import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
import { Controller } from "../src/decorator/controller";
import { Get } from "../src/decorator/get";
import { Injectable } from "../src/decorator/injectable";
import { Post } from "../src/decorator/post";
import { Query } from "../src/decorator/query";
import { Reply } from "../src/decorator/reply";
import { Request } from "../src/decorator/request";
import { FastifyContainer } from "../src/ioc/fastify.container";
import { GuardWidget } from "../src/widgets/guard.widget";
import { SchemaWidget } from "../src/widgets/schema.widget";
import { GlobalGuard, Guard, Guard1 } from "./guard";

const fastify = Fastify({ logger: true });

@Injectable
export class Test2Service {
    public vala: string = "1";
}

@Injectable
export class TestService {
    constructor(
        private readonly test2: Test2Service,
    ) { }
    public ok() { return this.test2.vala; }
}


@Injectable
class Nothing {
    constructor(
        private readonly a: TestService,
        // private readonly b: Test1Service,
    ) { }
    public ok() { return this.a.ok(); }
    // public test1() { console.log(this.b); }
}

// forwardRef(() => Nothing)
@Injectable
export class Test1Service {
    constructor(
        // @Inject(Nothing)
        private readonly nothing: Nothing,
    ) { }
    public test1() { return this.nothing.ok(); }
}


@Controller("test")
class Test {
    constructor(
        private readonly testService: TestService,
        private readonly nothing: Nothing,
    ) { }

    @Get("/test")
    @SchemaWidget({ querystring: { name: { type: "string" } } })
    @GuardWidget(new Guard(), new Guard1())
    public async aaa(
        @Query() query: any,
        @Query("ok") q1: any,
    ) {
        return `${q1},${this.testService.ok()}`;
    }

    @Get("/reply")
    public reply(@Request() request: FastifyRequest, @Reply() reply: FastifyReply<ServerResponse>) {
        reply.send("reply");
    }

    @Post()
    @SchemaWidget({
        body: {
            name: { type: "string" },
            required: ["name"],
        }
    })
    public async yy() {
        return this.nothing.ok();
    }
}

FastifyContainer({
    fastify,
    controllers: [Test],
    useGlobalGuard: [new GlobalGuard()],
});
fastify.addContentTypeParser("application/x-www-form-urlencoded", (req, done) => {
    done(null, req);
});


fastify.listen(9999);
