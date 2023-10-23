import { Request, Response } from 'express'

export const loginHandler = (req: Request, res: Response) => {
  console.log('LOGIN REQUEST: ', req.body)
  return res.send('Auth Handlerrrrr')
}