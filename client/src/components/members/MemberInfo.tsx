import { useState } from "react";
import { useFamilyMembers, useMembers } from "../../lib/queries";
import {
  Group,
  Select,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { PageLoader } from "..";
import { Member } from "../../lib/types";
import { useInputState } from "@mantine/hooks";

type Props = {
  memberId: string;
};

export const MemberInfo = ({ memberId }: Props) => {
  const { data: user, isLoading } = useFamilyMembers(memberId);
  const { data: members } = useMembers();
  const [addSpouse, setAddSpouse] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useInputState(user?.email || "");

  if (isLoading) return <PageLoader />;
  if (!user) return <Text>No User Found</Text>;
  console.log({ user, members });
  const {
    firstName,
    lastName,
    email,
    father,
    mother,
    spouse,
    siblings,
    children,
  } = user;

  const selectMembers = members?.map((m) => ({
    value: m._id,
    label: `${m.firstName} ${m.lastName}`,
  }));

  const concatMembers = (members: Member[]) =>
    members?.map((s: Member) => `${s?.firstName} ${s?.lastName}`).join(", ") ||
    null;

  return (
    <Stack>
      <Text size="xl">
        {firstName} {lastName}
      </Text>
      <Group>
        {email ? (
          <Text>Email: {email}</Text>
        ) : (
          <TextInput
            // size="sm"
            label="Email"
            placeholder="Enter Email"
            variant="filled"
            value={emailValue}
            onChange={setEmailValue}
          />
        )}
      </Group>
      {father ? (
        <Text>
          Father: {father?.firstName} {father?.lastName}
        </Text>
      ) : (
        <Select
          maw="300"
          label="Father"
          placeholder="Select Father"
          data={selectMembers}
          searchable
          comboboxProps={{ offset: 0 }}
        />
      )}
      {mother ? (
        <Text>
          Mother: {mother?.firstName} {mother?.lastName}
        </Text>
      ) : (
        <Select
          maw="300"
          label="Mother"
          placeholder="Select Mother"
          data={selectMembers}
          searchable
          comboboxProps={{ offset: 0 }}
        />
      )}
      <Text>
        Siblings: {concatMembers(siblings)}
        {!siblings.length && (
          <UnstyledButton c="blue">Add Relationship</UnstyledButton>
        )}
      </Text>
      {spouse ? (
        <Text>
          Spouse: {spouse?.firstName} {spouse?.lastName}
        </Text>
      ) : (
        <>
          {!addSpouse && (
            <UnstyledButton c="blue" onClick={() => setAddSpouse(true)}>
              Add Spouse
            </UnstyledButton>
          )}
          {addSpouse && (
            <Group align="flex-end">
              <Select
                maw="300"
                label="Spouse"
                placeholder="Select Spouse"
                data={selectMembers}
                searchable
                comboboxProps={{ offset: 0 }}
              />
              <UnstyledButton c="blue" onClick={() => setAddSpouse(false)}>
                Cancel
              </UnstyledButton>
            </Group>
          )}
        </>
      )}
      <Text>
        Children: {concatMembers(children)}
        {!children.length && (
          <UnstyledButton c="blue">Add Relationship</UnstyledButton>
        )}
      </Text>
    </Stack>
  );
};
