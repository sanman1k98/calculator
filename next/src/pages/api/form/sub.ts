import type { NextApiHandler } from "next";
import { URLSearchParams } from "url";

const apiHandler: NextApiHandler<string> = (req, res) => {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"])
        res.status(405).send(`Method ${req.method} is not allowed`)
        return
    }

    const params = new URLSearchParams(req.body);
    const x = Number(params.get("x"));
    const y = Number(params.get("y"));

    if (isNaN(x) || isNaN(y)) {
        res.status(400).send("Not a Number");
        return;
    } else {
        res.status(200).send((x - y).toString());
        return;
    }
}

export default apiHandler;