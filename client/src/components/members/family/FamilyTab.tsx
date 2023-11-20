import { FC } from "react";
import { Title } from "@mantine/core";
import { MemberI } from "../../../lib/types";
import { FamilyMemberGroup } from "../FamilyMemberGroup";

interface FamilyTabProps {
  memberFamily: MemberI | null;
}

export const FamilyTab: FC<FamilyTabProps> = ({ memberFamily }) => {
  return (
    <>
      <Title m={20} order={2}>
        My Family
      </Title>
      <FamilyMemberGroup title="Parents" members={[]} />
      <FamilyMemberGroup title="Spouse" members={memberFamily?.spouse} />
      <FamilyMemberGroup title="Children" members={memberFamily?.children} />
    </>
  );
};
