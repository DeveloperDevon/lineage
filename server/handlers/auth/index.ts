import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authHandler = async (req: Request, res: Response) => {
  try {
    const cookies = req.cookies;

    if (!cookies?.authToken)
      return res
        .status(401)
        .send({ authorized: false, reason: "No Auth Token" });

    const isTokenValid = jwt.verify(cookies.authToken, "secret") as any;
    console.log({ isTokenValid: isTokenValid.user })

    if (!isTokenValid)
      return res
        .status(401)
        .send({ authorized: false, reason: "Token Invalid" });

    return res
      .status(200)
      .send({ authorized: true, user: isTokenValid.user });
  } catch (error: any) {
    console.error(error);
    return res.status(401).send({ authorized: false, reason: error.message });
  }
};

export * from "./login";
export * from './logout'
