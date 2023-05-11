import { Request, Response } from 'express'
import { addNewMember } from '../../db'

export const addNewMemberHandler = async (req: Request, res: Response) => {
  const member = req.body
  const result = await addNewMember(member)
  console.log(result)
  res.send(result)

}
