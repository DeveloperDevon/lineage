import { Request, Response } from "express";
import { getMemberFamily } from "../../db";

export const memberFamilyHandler = async (req: Request, res: Response) => {
  const { id } = req.query;
  if (!id) return res.status(403).send("Id is required");
  try {
    const member = await getMemberFamily(id as string);
    console.log(member);
    delete member.password;
    res.send(member);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
