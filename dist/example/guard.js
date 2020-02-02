"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("../src/template/guard");
class GlobalGuard extends guard_1.FastifyGuard {
    preValidation(reqeust, reply, done) {
        console.log("good");
        done();
    }
}
exports.GlobalGuard = GlobalGuard;
class Guard extends guard_1.FastifyGuard {
    preValidation(reqeust, reply, done) {
        console.log("good1");
        done();
    }
}
exports.Guard = Guard;
class Guard1 extends guard_1.FastifyGuard {
    preValidation(reqeust, reply, done) {
        console.log("good2");
        done();
    }
}
exports.Guard1 = Guard1;
