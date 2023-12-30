import { Request, Response } from "express";
import { getMemberFamily } from "../../db";

export const memberFamilyHandler = async (req: Request, res: Response) => {
  const { id } = req.query;
  if (!id) return res.status(403).send("Id is required");
  try {
    const member = await getMemberFamily(id as string);
    delete member.password;
    member.father = member.father[0]
    member.mother = member.mother[0]
    member.spouse = member.spouse[0]
    res.send(member);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
