import { Request, Response } from 'express'
import { setSpouseRelationship } from '../../db'

export const setSpouseRelationshipHandler = async (req: Request, res: Response) => {
  const { memberId, spouseId } = req.body
  const result = await setSpouseRelationship({ memberId, spouseId })
  res.send(result)
}
