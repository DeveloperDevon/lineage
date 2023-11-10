import { NextFunction, Request, Response, Router } from "express";
import jwt from "jsonwebtoken";

import authRouter from "./auth";
import membersRouter from "./member";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const cookies = req.cookies;
  if (!cookies?.authToken) return res.status(403).send("Unauthorized");

  const verified = jwt.verify(cookies.authToken, "secret");
  console.log("VERIFIED", verified);
  if (!verified) return res.status(403).send("Unauthorized");
  next();
};

const appRouter = Router();
appRouter.use("/auth", authRouter);
appRouter.use("/members", authMiddleware, membersRouter);

export default appRouter;
