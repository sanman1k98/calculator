import type { NextApiHandler } from "next";
import { URLSearchParams } from "url";

const apiHandler: NextApiHandler<string> = (req, res) => {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"])
        res.status(405).send(`Method ${req.method} is not allowed`)
        return
    }

    const params = new URLSearchParams(req.body)

    let result = 0
    for (const value of params.values()) {
        const num = Number(value)
        if (isNaN(num)) {
            res.status(400).send("Not a Number")
            return
        } else {
            result += Number(value)
        }
    }

    res.status(200).send(result.toString())
}

export default apiHandler