import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifyMember } from "../../db";

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { verified, user } = await verifyMember(email, password);
    if (!verified) return res.status(403).send(user);

    return jwt.sign(
      { user },
      "secret",
      { expiresIn: "5m", algorithm: "HS256" },
      function (err, authToken) {
        if (err) throw err;
        res.cookie("authToken", authToken, {
          secure: false,
          httpOnly: true,
          // sameSite: "strict",
        });

        return res.json({ verified, user });
      },
    );
  } catch (error) {
    console.error("JWT SIGN ERROR", error);
    res.sendStatus(500);
  }
};
