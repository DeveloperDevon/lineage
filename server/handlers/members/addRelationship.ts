import { Request, Response } from "express";
import { addNewMember, addRelationship } from "../../db";
import { ObjectId } from "mongodb";

const getRelationshipKey = (relationship: string) => {
  if (relationship.toLowerCase() === "spouse") return "spouse";
  if (relationship.toLowerCase() === "sibling") return "sibling";
  if (["father", "mother"].includes(relationship.toLowerCase())) return "child";
  return "";
};

export const addRelationshipHandler = async (req: Request, res: Response) => {
  const { member, relationship, newMember } = req.body;
  //TODO: set relationshipId to new Member
  // const relationshipKey = getRelationshipKey(relationship);
  const newMemberResponse = await addNewMember({
    ...newMember,
  });
  const { insertedId } = newMemberResponse;
  const updatedMemberRelationship = getRelationshipKey(relationship);
  let updateNewMemberResponse;
  if (updatedMemberRelationship !== "") {
    updateNewMemberResponse = await addRelationship(
      insertedId,
      updatedMemberRelationship,
      member._id,
    );
  }
  const updateMemberResponse = await addRelationship(
    member._id,
    relationship,
    insertedId,
  );
  res.send({
    member,
    relationship,
    newMemberResponse,
    updateNewMemberResponse,
    updateMemberResponse,
  });
};
