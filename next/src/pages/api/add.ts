import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { leftOperand, rightOperand },
    method,
  } = req

  switch (method) {
    case 'POST':
      res.status(200).json({ result: leftOperand + rightOperand })
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}