"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_container_1 = require("../src/core/fastify.container");
const controller_1 = require("../src/decorator/controller");
const get_1 = require("../src/decorator/get");
const injectable_1 = require("../src/decorator/injectable");
const post_1 = require("../src/decorator/post");
const query_1 = require("../src/decorator/query");
const reply_1 = require("../src/decorator/reply");
const request_1 = require("../src/decorator/request");
const guard_widget_1 = require("../src/widgets/guard.widget");
const schema_widget_1 = require("../src/widgets/schema.widget");
const guard_1 = require("./guard");
const res_1 = require("./res");
const fastify = fastify_1.default({ logger: true });
let AnimalService = class AnimalService {
    constructor() {
        this.animal = "The animal";
    }
};
AnimalService = __decorate([
    injectable_1.Injectable
], AnimalService);
let CatService = class CatService {
    constructor(animalService) {
        this.animalService = animalService;
    }
    getType() { return `${this.animalService.animal} is red cat.`; }
};
CatService = __decorate([
    injectable_1.Injectable,
    __metadata("design:paramtypes", [AnimalService])
], CatService);
let DogService = class DogService {
    constructor(animalService) {
        this.animalService = animalService;
    }
    getType() { return `${this.animalService.animal} is black dog.`; }
};
DogService = __decorate([
    injectable_1.Injectable,
    __metadata("design:paramtypes", [AnimalService])
], DogService);
let ZoomService = class ZoomService {
    constructor(catService, dogService) {
        this.catService = catService;
        this.dogService = dogService;
    }
    getDog() {
        return this.dogService.getType();
    }
    getCat() {
        return this.catService.getType();
    }
};
ZoomService = __decorate([
    injectable_1.Injectable,
    __metadata("design:paramtypes", [CatService,
        DogService])
], ZoomService);
exports.ZoomService = ZoomService;
let ApplicationController = class ApplicationController {
    constructor(zoomService, animalService) {
        this.zoomService = zoomService;
        this.animalService = animalService;
    }
    async function1(query, name) {
        return {
            query,
            name,
            message: `${this.animalService.animal} is ${name}`,
        };
    }
    reply(request, reply) {
        reply.send(this.zoomService.getDog());
    }
    async formatResponse() {
        return {
            type: this.zoomService.getCat(),
        };
    }
};
__decorate([
    get_1.Get("/name"),
    schema_widget_1.SchemaWidget({ querystring: { name: { type: "string" } } }),
    guard_widget_1.GuardWidget(new guard_1.Guard(), new guard_1.Guard1()),
    __param(0, query_1.Query()),
    __param(1, query_1.Query("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "function1", null);
__decorate([
    get_1.Get("/reply"),
    __param(0, request_1.Request()), __param(1, reply_1.Reply()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApplicationController.prototype, "reply", null);
__decorate([
    post_1.Post(),
    schema_widget_1.SchemaWidget({
        body: {
            name: { type: "string" },
            required: ["name"],
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "formatResponse", null);
ApplicationController = __decorate([
    controller_1.Controller(),
    __metadata("design:paramtypes", [ZoomService,
        AnimalService])
], ApplicationController);
fastify_container_1.FastifyContainer({
    fastify,
    controllers: [ApplicationController],
    useGlobalGuard: [new guard_1.GlobalGuard()],
    useGlobalResponseInterceptor: [new res_1.ResInterceptor()],
    baseUrl: "/app",
});
fastify.addContentTypeParser("application/x-www-form-urlencoded", (req, done) => {
    done(null, req);
});
fastify.listen(9999);
