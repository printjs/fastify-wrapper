import test from "ava";
import { fastify } from "../../global";


test("test put controller", async (t) => {
    try {
        const response = await fastify.inject({
            method: "PUT",
            url: "/api/put"
        });
        t.is(response.statusCode, 200);
        t.is(response.payload, "level3 include level2");
    } catch (error) {
        t.fail(error);
    }
});


test("The guard widget", async (t) => {
    try {
        const response = await fastify.inject({
            method: "PUT",
            url: "/api/put/fail"
        });
        t.is(response.statusCode, 500);
        t.is(JSON.parse(response.payload).message, "niubi");
    } catch (error) {
        t.fail(error);
    }
});


test("The guard widget depend on value", async (t) => {
    try {
        const response = await fastify.inject({
            method: "PUT",
            url: "/api/put/valiation",
            payload: {
                cond: true,
            }
        });
        t.is(response.statusCode, 200);
        t.is(response.payload, "sucess or fail depend on cond in body");
        const res = await fastify.inject({
            method: "PUT",
            url: "/api/put/valiation",
            payload: { cond: false },
        });
        t.is(res.statusCode, 403);
        t.is(JSON.parse(res.payload).message, "niubi");
    } catch (error) {
        t.fail(error);
    }
});
