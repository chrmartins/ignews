import { NextApiRequest } from 'next'
import { NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('evento recebido')

  res.status(200).json({ ok: true });
}