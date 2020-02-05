import test from "ava";
import { fastify } from "../../global";

test("Is @Reply function normal?", async (t) => {
    try {
        const response = await fastify.inject({
            method: "GET",
            url: "/api/get/test_reply",
        });
        t.is(response.statusCode, 200, "The status is correct");
        t.is(response.payload, "The message come from reply method");
    } catch (error) {
        t.fail(error);
    }
});

test("Is function that is not use @Reply normal?", async (t) => {
    try {
        const response = await fastify.inject({
            method: "GET",
            url: "/api/get/test_return",
        });
        t.is(response.statusCode, 200, "The status is correct");
        t.is(response.payload, "The message come from return of function");
    } catch (error) {
        t.fail(error);
    }
});

test("The param and query decorator and PreSerializationWidget widget is normal ?", async (t) => {
    try {
        const response = await fastify.inject({
            method: "GET",
            url: "/api/get/test/1",
            query: { queryId: 1, content: "test" }
        });
        t.is(response.statusCode, 200, "The status is correct");
        t.deepEqual<any>(JSON.parse(response.payload), {
            singleRoute: {
                id: "1",
                queryId: "1",
                query: {
                    queryId: "1",
                    content: "test"
                }
            }
        }, "success");
    } catch (error) {
        t.fail(error);
    }
});
