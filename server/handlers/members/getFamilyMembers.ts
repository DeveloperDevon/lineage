import { Request, Response } from "express";
import { getFamilyMembers } from "../../db/pg/members/get-family-members";

export const getFamilyMembersHandler = async (req: Request, res: Response) => {
  const { id } = req.query
  const family = await getFamilyMembers(Number(id));
  res.send(family);
};
