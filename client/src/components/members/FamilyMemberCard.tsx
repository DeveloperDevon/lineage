import { FC } from "react";
import { Avatar, Card, Center, Text, Title } from "@mantine/core";
import { Relationship } from "../../lib/types";

interface FamilyMemberProps {
  relationship?: Relationship | "";
  name: string;
  memberId?: string;
  handleClick?: () => void;
}

export const FamilyMemberCard: FC<FamilyMemberProps> = ({
  relationship,
  name,
  handleClick,
}) => {
  return (
    <Card
      withBorder
      radius="md"
      shadow="sm"
      padding="md"
      w={240}
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <Center>
        <Avatar radius="md" size="xl" color="blue" />
      </Center>
      <Center>
        <Title order={4}>{relationship}</Title>
      </Center>
      <Center>
        <Text order={5}>{name}</Text>
      </Center>
    </Card>
  );
};
