import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {

  // TODO: create a type for the body
  const {
    body: { left, right },
    method,
  } = req

  if (method === 'POST') {
    res.status(200).json({ result: left - right })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${method} Not Allowed`)
  }
}