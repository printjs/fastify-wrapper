import Fastify from "fastify";

const fastify = Fastify({ logger: true });
fastify.route({
    method: "GET",
    url: "/123/123",
    schema: {
        // request needs to have a querystring with a `name` parameter
        querystring: {
            name: { type: "string" }
        },
        // the response needs to be an object with an `hello` property of type "string"
        // response: {
        //     200: {
        //         type: "object",
        //         properties: {
        //             res: {
        //                 type: "object"
        //             }
        //         }
        //     }
        // }
    },
    // // this function is executed for every request before the handler is executed
    // beforeHandler: async (request: any, reply: any) => {
    //     // E.g. check authentication
    // },
    preValidation: (request, reply, done) => {
        console.log("come in zero");
        done();
    },
    handler: async (request: any, reply: any) => {
        return { hello: "world" };
        // return "hello world";
        // return 1;
    },
    onSend: (request: any, reply: any, payload: any, done: any) => {
        console.log(`---------${payload}---------`);
        done();
    },
    // onResponse: (...args: any[]) => {
    // console.log(`response---------${args}---------`);
    // done();
    // },
});

fastify.addHook("onRequest", (request: any, reply: any, done: any) => {
    console.log("Some code 1");
    done();
});

fastify.addHook("onRequest", (request: any, reply: any, done: any) => {
    console.log("Some code 2");
    done();
});

fastify.addHook("preValidation", (request, reply, done) => {
    console.log("come in 000000000");
    done();
});

fastify.addHook("preValidation", (request, reply, done) => {
    console.log("come in 000000001");
    done();
});

// fastify.addHook("onSend", (request, reply, payload, done) => {
//     console.log("Some code 3");
//     console.log(payload);
// });

// fastify.addHook("onResponse", (request, reply, done) => {
//     console.log(reply.serialize);
//     done();
// });

const start = async () => {
    try {
        await fastify.listen(3000);
        // fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
