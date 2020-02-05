import test from "ava";
import { fastify } from "../../global";

test("test post", async (t) => {
    try {
        const response = await fastify.inject({
            url: "/api/post",
            method: "POST",
            payload: {
                bodyId: 1,
                content: "post test",
            }
        });
        t.is(response.statusCode, 200, "normal");
        t.deepEqual<any>(JSON.parse(response.payload), { body: { bodyId: 1, content: "post test" }, bodyId: 1 });
    } catch (error) {
        t.fail(error);
    }
});
