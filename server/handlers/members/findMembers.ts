import { Request, Response } from "express";
import { getMembers } from "../../db";

export const findAllMembersHandler = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  console.log("COOKIESS", cookies);
  const members = await getMembers();
  res.send(members);
};
