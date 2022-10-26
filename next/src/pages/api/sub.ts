import type { NextApiRequest, NextApiResponse } from "next";
import type { Input } from "../../interfaces/Input"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req
  const { x, y } = body as Input

  if (method === 'POST') {
    res.status(200).json({ result: x - y })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${method} Not Allowed`)
  }
}