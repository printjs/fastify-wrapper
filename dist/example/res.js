"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preSerialization_1 = require("../src/template/preSerialization");
class ResInterceptor extends preSerialization_1.FastifyPreSerialization {
    preSerialization(request, reply, payload, done) {
        console.log(payload);
        done(undefined, { res: payload });
    }
}
exports.ResInterceptor = ResInterceptor;
