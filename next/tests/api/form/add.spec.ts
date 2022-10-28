import { expect, test } from "@playwright/test";

test("should add two numbers with keys 'x' and 'y'", async ({ request }) => {
    const result = await request.post("/api/form/add", {
        form: {
            x: 2,
            y: 2,
        }
    })

    expect(result.ok())
    expect(await result.text()).toBe("4")
})

test("should add two numbers with arbitrary keys", async ({ request }) => {
    const result = await request.post("/api/form/add", {
        form: {
            a_number: 2,
            another_number: 2,
        }
    })

    expect(result.ok())
    expect(await result.text()).toBe("4")
})

test("should add any amount of given numbers", async ({ request }) => {
    const result = await request.post("/api/form/add", {
        form: {
            x: 2,
            y: 2,
            z: 2,
            a: 2,
            b: 2,
            c: 2,
        }
    })

    expect(result.ok())
    expect(await result.text()).toBe("12")
})

test("should error when not given a number", async ({ request }) => {
    const result = await request.post("/api/form/add", {
        form: {
            x: "two",
            y: "two",
        }
    })

    expect(!result.ok())
    expect(result.status()).toBe(400)
    expect(result.statusText()).toBe("Bad Request")
    expect(await result.text()).toBe("Not a Number")
})

test("should not support GET requests", async ({ request }) => {
    const res = await request.get("/api/form/add", {
        params: {
            x: 2,
            y: 2,
        }
    })

    expect(!res.ok())
    expect(res.status()).toBe(405)
})