import { Request, Response } from 'express'

export const logoutHandler = (req: Request, res: Response) => {
  try {
    return res.status(200).clearCookie('authToken', { path: '/' }).send('ok')
  } catch (err) {
    console.error(err)
    return res.sendStatus(500)
  }
}