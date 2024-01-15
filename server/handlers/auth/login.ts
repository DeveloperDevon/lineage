import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifyMember } from "../../db";
import { findUser } from "../../db/pg";

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await findUser(email)
    // const { verified, member } = await verifyMember(email, password);
    // if (!verified) {
    //   res.clearCookie("authToken");
    //   return res.status(403).send({ authorized: false, member });
    // }

    return jwt.sign(
      user,
      "secret",
      { expiresIn: "10w", algorithm: "HS256" },
      (err, authToken) => {
        if (err) throw err;
        res.cookie("authToken", authToken, {
          secure: false,
          httpOnly: true,
          // sameSite: "strict",
        });

        return res.json({ verified: true, user });
      },
    );
  } catch (error) {
    console.error("JWT Signature Error: ", error);
    res.sendStatus(500);
  }
};
