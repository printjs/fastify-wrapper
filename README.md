## fastify-wrapper 

Welcome to `fastify-wrapper`, if you know fastify well, you will easily use this library.

### Install 
```
yarn add fastify fastify-wrapper
```

### The following decorators are available
- BodyLimit
- Body
- Config
- Controller
- Delete
- Done
- Get
- Head
- Injectable
- LogLevel
- Options
- Param
- Post
- PrefixTrailingSlash
- Put
- Query
- Reply
- Request
- Version
- GuardWidget
- OnRequestWidget
- OnResponseWidget
- OnSendWidget
- PreHandlerWidget
- PreParsingWidget
- preSerializationWidget
- SchemaWidget

### The following code will show you how to use `fastify-wrapper`

```Typescript
import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
import { GlobalGuard, Guard, Guard1 } from "./guard";
import { ResInterceptor } from "./res";
import {
    Injectable,
    Controller,
    Get,
    SchemaWidget,
    GuardWidget,
    Query,
    Post,
    FastifyContainer,
    Request,
    Reply,
} from "fastify-wrapper";

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
    @GuardWidget(new Guard(), new Guard1())
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
    public reply(
        @Request() request: FastifyRequest,
        @Reply() reply: FastifyReply<ServerResponse>
    ) {
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
```
