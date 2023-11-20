import { ObjectId } from "mongodb";
import { db } from "./index";

export const getMembers = async () => {
  try {
    const collection = await db.collection("members");
    const results = await collection.find({}).sort({ firstName: 1 }).toArray();
    return results;
  } catch (err) {
    console.error(err);
  }
};

export const getMemberFamily = async (memberId: string) => {
  const id = new ObjectId(memberId);
  try {
    const collection = await db.collection("members");
    const familyMembers = await collection.aggregate([
      { $match: { _id: id } },
      {
        $lookup: {
          from: "members",
          localField: "parentIds",
          foreignField: "_id",
          as: "parents",
        },
      },
      {
        $lookup: {
          from: "members",
          localField: "childrenIds",
          foreignField: "_id",
          as: "children",
        },
      },
      {
        $lookup: {
          from: "members",
          localField: "spouseId",
          foreignField: "_id",
          as: "spouse",
        },
      },
    ]);
    const memberFamily = await familyMembers.toArray();
    return memberFamily[0];
  } catch (error) {
    console.error(error);
  }
};

export const getMemberByEmail = async (email: string) => {
  try {
    const collection = await db.collection("members");
    const member = await collection.findOne({ email });
    if (!member) return null;
    return member;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const verifyMember = async (email: string, password: string) => {
  try {
    const collection = await db.collection("members");
    const member = await collection.findOne({ email });
    if (!member)
      return {
        verified: false,
        reason: `No user found with the email ${email}`,
      };
    const foundPassword = member.password;
    if (password !== foundPassword) {
      return { verified: false, member: null, reason: "Invalid Credentials" };
    }
    // const { firstName, middleName, lastName, _id } = results;
    delete member.password;
    // const user = { firstName, middleName, lastName, email };
    return { verified: true, member };
  } catch (err) {
    console.error(err);
    return { verified: false };
  }
};

export const addNewMember = async (member: any) => {
  try {
    const collection = await db.collection("members");
    const results = await collection.insertOne(member);
    console.log("New Member Added:", results);
    return results;
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
};

export const addRelationship = async (
  memberId: string,
  relationship: string,
  relationshipId: string,
) => {
  try {
    const collection = await db.collection("members");
    let results: any;
    if (["sibling", "child"].includes(relationship.toLowerCase())) {
      await collection.updateOne(
        { _id: new ObjectId(memberId) },
        {
          $push: {
            [relationship.toLowerCase() + "Ids"]: new ObjectId(relationshipId),
          },
        },
      );
    } else {
      await collection.updateOne(
        { _id: new ObjectId(memberId) },
        {
          $set: {
            [relationship.toLowerCase() + "Id"]: new ObjectId(relationshipId),
          },
        },
      );
    }
    return results;
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
};

interface setChildParentRelationshipProps {
  relationship: "father" | "mother";
  childId: string;
  parentId: string;
}
export const setChildParentRelationship = async ({
  relationship,
  childId,
  parentId,
}: setChildParentRelationshipProps) => {
  try {
    const field = relationship === "mother" ? "motherId" : "fatherId";
    const query = { _id: new ObjectId(childId) };
    const updates = { $set: { [field]: parentId } };
    const members = await db.collection("members");
    const results = await members.updateOne(query, updates);
    console.log(results);
    return results;
  } catch (err) {
    console.error(err);
  }
};

interface setSpouseRelationshipProps {
  memberId: string;
  spouseId: string;
}

export const setSpouseRelationship = async ({
  memberId,
  spouseId,
}: setSpouseRelationshipProps) => {
  try {
    const members = await db.collection("members");

    const results = await members.bulkWrite([
      {
        updateOne: {
          filter: {
            _id: new ObjectId(memberId),
          },
          update: {
            $set: {
              spouseId: spouseId,
            },
          },
        },
      },
      {
        updateOne: {
          filter: {
            _id: new ObjectId(spouseId),
          },
          update: {
            $set: {
              spouseId: memberId,
            },
          },
        },
      },
    ]);

    return results;
  } catch (err) {
    console.error(err);
  }
};
