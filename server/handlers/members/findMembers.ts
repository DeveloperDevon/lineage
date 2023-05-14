import { Request, Response } from 'express'
import { getMembers } from '../../db'

export const findAllMembersHandler = async (_: Request, res: Response) => {
  const members = await getMembers()
  res.send(members)
}
