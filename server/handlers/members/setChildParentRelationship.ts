import { Request, Response } from 'express'
import { setChildParentRelationship } from '../../db'

export const setChildParentRelationshipHandler = async (req: Request, res: Response) => {
  const { parent, child, relationship } = req.body
  const result = await setChildParentRelationship({ relationship, childId: child._id, parentId: parent._id })
  console.log({ parent, child, result })
  res.send({ parent, child, result })
}
