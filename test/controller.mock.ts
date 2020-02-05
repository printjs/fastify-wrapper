import { FastifyReply } from "fastify";
import {
    Body,
    Controller,
    Get,
    GuardWidget,
    Param,
    Post,
    PreSerializationWidget,
    Put,
    Query,
    // SchemaWidget,
    Reply,
} from "../src";
import { Guard, Guard1 } from "./guard.tpl";
import { SingleRouteFormatResponse } from "./preserialization.tpl";
import { Level3ServiceMock } from "./service.mock";

@Controller("get")
export class GetController {
    @Get("/test_reply")
    public testReply(
        @Reply() reply: FastifyReply<any>,
    ) {
        reply.send("The message come from reply method");
    }

    @Get("/test_return")
    public async test() {
        return "The message come from return of function";
    }

    @Get("/test/:id")
    @PreSerializationWidget(new SingleRouteFormatResponse())
    public testAboveDecorator(
        @Param("id") id: string,
        @Query("queryId") queryId: string,
        @Query() query: any,
    ) {
        return {
            id,
            queryId,
            query,
        };
    }
}

@Controller("post")
export class PostController {
    @Post()
    public test(
        @Body() body: any,
        @Body("bodyId") bodyId: string,
    ) {
        return {
            body,
            bodyId,
        };
    }
}

@Controller("put")
export class PutController {
    constructor(
        // private readonly level1Service: Level1ServiceMock,
        private readonly level3Service: Level3ServiceMock,
    ) { }
    @Put()
    public test() {
        return this.level3Service.getMessage();
    }

    @Put("fail")
    @GuardWidget(new Guard())
    public valiationFailed() {
        return "ok";
    }

    @Put("valiation")
    @GuardWidget(new Guard1())
    public valiation() {
        return "sucess or fail depend on cond in body";
    }
}

