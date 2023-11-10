import { FC } from "react";
import { PageContainer } from "../layout";
import { Avatar, Card, Center, Grid, Group, Text, Title } from "@mantine/core";

type Relationship =
  | "Mom"
  | "Dad"
  | "Brother"
  | "Sister"
  | "Wife"
  | "Son"
  | "Daughter";

interface FamilyMemberProps {
  relationship?: Relationship;
  name: string;
  memberId: string;
}

const FamilyCard: FC<FamilyMemberProps> = ({
  relationship,
  name,
  memberId,
}) => {
  return (
    <Card withBorder radius="md" shadow="sm" padding="md" w={240}>
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

export const HomePage = () => {
  return (
    <PageContainer>
      <Title mb={20} order={2}>
        My Family
      </Title>

      <Card withBorder radius="sm" my={5}>
        <Title order={3}>Parents</Title>
        <Group>
          <FamilyCard
            relationship="Mom"
            name={"Shelli Auger"}
            memberId={"abc123"}
          />
          <FamilyCard
            relationship="Dad"
            name={"Carl Reichardt"}
            memberId={"abc123"}
          />
        </Group>
      </Card>

      <Card withBorder radius="sm" my={5}>
        <Title order={3}>Siblings</Title>
        <Group>
          <FamilyCard
            relationship="Brother"
            name={"Josh Reichardt"}
            memberId={"abc123"}
          />
          <FamilyCard
            relationship="Sister"
            name={"Krista Fischer"}
            memberId={"abc123"}
          />
        </Group>
      </Card>

      <Card withBorder radius="sm" my={5}>
        <Title order={3}>Spouse</Title>
        <Group>
          <FamilyCard
            relationship="Wife"
            name={"Chandler Reichardt"}
            memberId={"abc123"}
          />
        </Group>
      </Card>

      <Card withBorder radius="sm" my={5}>
        <Title order={3}>Children</Title>
        <Group>
          <FamilyCard
            relationship="Son"
            name={"Clayton Reichardt"}
            memberId={"abc123"}
          />
          <FamilyCard
            relationship="Daughter"
            name={"Holland Reichardt"}
            memberId={"abc123"}
          />
        </Group>
      </Card>
    </PageContainer>
  );
};
