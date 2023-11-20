import { FC, useState } from "react";
import { Group, Button } from "@mantine/core";
import { AddMemberForm } from "../AddMemberForm";
import { MemberI } from "../../../lib/types";

interface AddMemberTabProps {
  member: MemberI;
}

export const AddMemberTab: FC<AddMemberTabProps> = ({ member }) => {
  const [newOrExisting, setNewOrExisting] = useState<"NEW" | "EXISTING">("NEW");

  return (
    <div style={{ maxWidth: 500 }}>
      <Group my={15}>
        <Button
          variant={newOrExisting === "NEW" ? "light" : "outline"}
          onClick={() => setNewOrExisting("NEW")}
        >
          New
        </Button>
        <Button
          variant={newOrExisting === "EXISTING" ? "light" : "outline"}
          onClick={() => setNewOrExisting("EXISTING")}
        >
          Existing{" "}
        </Button>
      </Group>
      {newOrExisting === "NEW" && (
        <AddMemberForm showRelationship member={member} />
      )}
      {newOrExisting === "EXISTING" && (
        <>TODO: Show existing members to choose from {JSON.stringify(member)}</>
      )}
    </div>
  );
};
