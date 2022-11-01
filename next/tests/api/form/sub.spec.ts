import { expect, test } from "@playwright/test";

test("should subtract two numbers with keys 'x' and 'y'", async ({ request }) => {
    const result = await request.post("/api/form/sub", {
        form: {
            x: 2,
            y: 2,
        }
    });

    expect(result.ok())
    expect(await result.text()).toBe("0");
});

test("should error when not given a number", async ({ request }) => {
    const res = await request.post("/api/form/sub", {
        form: {
            x: "two",
            y: "two",
        }
    });

    expect(!res.ok());
    expect(res.status()).toBe(400);
    expect(res.statusText()).toBe("Bad Request");
    expect(await res.text()).toBe("Not a Number");
});

test("should not support GET requests",async ({ request }) => {
    const res = await request.get("/api/form/sub", {
        params: {
            x: 2,
            y: 2,
        }
    });

    expect(!res.ok());
    expect(res.status()).toBe(405);
})