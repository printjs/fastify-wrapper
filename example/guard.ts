import { FastifyGuard } from "../src/template/guard";

export class GlobalGuard extends FastifyGuard {
    public preValidation(reqeust: any, reply: any, done: any) {
        console.log("good");
        done();
    }
}

export class Guard extends FastifyGuard {
    public preValidation(reqeust: any, reply: any, done: any) {
        done();
    }
}

export class Guard1 extends FastifyGuard {
    public preValidation(reqeust: any, reply: any, done: any) {
        done(new TypeError());
    }
}
