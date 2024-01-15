import { Request, Response } from 'express'
import { addNewMember } from '../../db/pg/members'

export const addNewMemberHandler = async (req: Request, res: Response) => {
  const member = req.body
  const result = await addNewMember(member)
  res.send(result)
}
