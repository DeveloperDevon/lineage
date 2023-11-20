import { FC } from "react";
import { TextInput, NativeSelect, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { server } from "../../lib/axios";
import { MemberI } from "../../lib/types";

interface AddMemberFormProps {
  member?: MemberI;
  showRelationship?: boolean;
}

export const AddMemberForm: FC<AddMemberFormProps> = ({
  member,
  showRelationship,
}) => {
  // TODO: filter relationships based on available to add
  const relationships = ["Father", "Mother", "Sibling", "Spouse", "Child"];

  const form = useForm({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      relationship: relationships[0],
    },

    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    // },
  });

  const handleSubmit = async (values: any) => {
    // await server.post("/member", values).then(console.log).catch(console.error);
    if (showRelationship) {
      const { relationship, firstName, middleName, lastName } = values;
      await server
        .post("/members/relationship", {
          member,
          relationship,
          newMember: { firstName, middleName, lastName },
        })
        .then(console.log)
        .catch(console.error);
    }
    console.log(values);
  };

  return (
    <div>
      <Box p="10px">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          {showRelationship && (
            <NativeSelect
              label="Relationship"
              data={relationships}
              {...form.getInputProps("relationship")}
            />
          )}
          <TextInput
            withAsterisk
            label="First Name"
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Middle Name"
            {...form.getInputProps("middleName")}
          />
          <TextInput
            withAsterisk
            label="Last Name"
            {...form.getInputProps("lastName")}
          />
          <Group mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};
