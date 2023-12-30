import { Router } from "express";
import { authHandler, loginHandler, logoutHandler } from "../handlers/auth";

const authRouter = Router();

authRouter.get("/", authHandler);
authRouter.post("/login", loginHandler);
authRouter.post('/logout', logoutHandler)

export default authRouter;
