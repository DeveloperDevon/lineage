import { FC } from "react";
import { Card, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FamilyMemberCard } from "./FamilyMemberCard";
import { AddRelationshipDrawer } from "./AddRelationshipDrawer";
import { MemberI, Relationship } from "../../lib/types";

interface FamilyMemberGroupProps {
  title: Relationship;
  members?: MemberI[];
}

export const FamilyMemberGroup: FC<FamilyMemberGroupProps> = ({
  title,
  members,
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  const getRelationship = (title: Relationship) => {
    if (title === "Parents") return "Parent";
    if (title === "Spouse") return title;
    if (title === "Children") return "Child";
  };

  if (!members?.length) {
    return (
      <>
        <AddRelationshipDrawer opened={opened} open={open} close={close} />
        <Card withBorder radius="sm" my={5}>
          <Title order={3}>{title}</Title>
          <Group>
            {[...Array(2).keys()].map((_, i: number) => (
              <FamilyMemberCard
                key={i}
                relationship=""
                name={`Add ${getRelationship(title)}`}
                handleClick={open}
              />
            ))}
          </Group>
        </Card>
      </>
    );
  }

  return (
    <Card withBorder radius="sm" my={5}>
      <Title order={3}>{title}</Title>
      <Group>
        {members?.map((member, i) => (
          <FamilyMemberCard
            key={i}
            relationship={getRelationship(title)}
            name={`${member.firstName} ${member.lastName}`}
            memberId={"abc123"}
          />
        ))}
      </Group>
    </Card>
  );
};
