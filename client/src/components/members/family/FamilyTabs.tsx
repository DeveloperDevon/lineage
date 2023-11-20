import { FC } from "react";
import { Tabs } from "@mantine/core";
import { FamilyTab } from "./FamilyTab";
import { MemberI } from "../../../lib/types";
import { AddMemberTab } from "./AddMemberTab";

interface FamilyTabs {
  memberFamily: MemberI;
}

export const FamilyTabs: FC<FamilyTabs> = ({ memberFamily }) => {
  return (
    <Tabs defaultValue="family">
      <Tabs.List>
        <Tabs.Tab value="family">Members</Tabs.Tab>
        <Tabs.Tab value="addMember">Add Member</Tabs.Tab>
        <Tabs.Tab value="profile">Profile</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="family">
        <FamilyTab memberFamily={memberFamily} />
      </Tabs.Panel>
      <Tabs.Panel value="addMember">
        <AddMemberTab member={memberFamily} />
      </Tabs.Panel>
      <Tabs.Panel value="profile">
        Only Show if Admin or Logged in user
      </Tabs.Panel>
    </Tabs>
  );
};
