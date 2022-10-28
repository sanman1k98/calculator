import { expect, test } from "@playwright/test";

test("should multiply two numbers with keys 'x' and 'y'", async ({ request }) => {
    const result = await request.post("/api/form/mul", {
        form: {
            x: 2,
            y: 2,
        }
    })

    expect(result.ok())
    expect(await result.text()).toBe("4")
})

test("should multiply two numbers with arbitrary keys", async ({ request }) => {
    const result = await request.post("/api/form/mul", {
        form: {
            a_number: 2,
            another_number: 2,
        }
    })

    expect(result.ok())
    expect(await result.text()).toBe("4")
})

test("should multiply together any amount of given numbers", async ({ request }) => {
    const result = await request.post("/api/form/mul", {
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
    expect(await result.text()).toBe("64")
})

test("should multiply two floating point numbers",async ({ request }) => {
    const res = await request.post("/api/form/mul", {
        form: {
            x: 1.5,
            y: 1.5,
        }
    })

    expect(res.ok())
    expect(await res.text()).toBe("2.25")
})

test("should error when not given a number", async ({ request }) => {
    const result = await request.post("/api/form/mul", {
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
    const res = await request.get("/api/form/mul", {
        params: {
            x: 2,
            y: 2,
        }
    })

    expect(!res.ok())
    expect(res.status()).toBe(405)
})