import { Router } from "express";
import * as handlers from "../handlers";

const membersRouter = Router();

membersRouter.post("/", handlers.addNewMemberHandler);
membersRouter.get("/", handlers.findAllMembersHandler);
membersRouter.get("/family", handlers.getFamilyMembersHandler);
membersRouter.post("/relationship", handlers.addRelationshipHandler);
membersRouter.put(
  "/child-parent-relationship",
  handlers.setChildParentRelationshipHandler,
);
membersRouter.put(
  "/spouse-relationship",
  handlers.setSpouseRelationshipHandler,
);

export default membersRouter;
