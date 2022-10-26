import type { NextApiRequest, NextApiResponse } from "next";
import type { Input } from "../../interfaces/Input"

export default (req: NextApiRequest, res: NextApiResponse) => {

  const { body, method }: { body: Input, method?: string | undefined } = req

  if (method === 'POST') {
    const result = body.x / body.y
    if ( typeof result !== "number" ) {
      res.status(500).end({ error: "Not a Number" })
    }
    // Infinity, NaN, and null are all considered null when using JSON.stringify()
    res.status(200).send({ result: result })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${method} Not Allowed`)
  }
}