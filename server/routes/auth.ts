import { Router } from "express";
import { authHandler, loginHandler } from "../handlers/auth";

const authRouter = Router();

authRouter.get("/", authHandler);
authRouter.post("/login", loginHandler);

export default authRouter;
