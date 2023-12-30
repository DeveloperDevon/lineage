import { Title } from "@mantine/core";
import { Member } from "../../../lib/types";
import { FamilyMemberGroup } from "../FamilyMemberGroup";

type Props = {
  memberFamily: Member | null;
}

export const FamilyTab = ({ memberFamily }: Props) => {
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
