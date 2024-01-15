import { Request, Response } from "express";
import { getMembers } from "../../db/pg/members";

// export const findAllMembersHandler = async (req: Request, res: Response) => {
//   const cookies = req.cookies;
//   const members = await getMembers();
//   res.send(members);
// };

export const findAllMembersHandler = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  const members = await getMembers();
  res.send(members);
};
