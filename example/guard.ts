import { FastifyGuard } from "../src/template/guard";

export class GlobalGuard extends FastifyGuard {
    public preValidation(reqeust: any, reply: any, done: any) {
        console.log("good");
        done();
    }
}

export class Guard extends FastifyGuard {
    public preValidation(reqeust: any, reply: any, done: any) {
        console.log("good1");
        done();
    }
}

export class Guard1 extends FastifyGuard {
    public preValidation(reqeust: any, reply: any, done: any) {
        console.log("good2");
        done();
    }
}
