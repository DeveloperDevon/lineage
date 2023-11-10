import {
  Button,
  Card,
  Fieldset,
  Grid,
  Group,
  List,
  NavLink,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";

const initialValues = {
  firstName: "",
  lastName: "",
  middleName: "",
  email: "",
};

import { PageContainer } from "../layout";
import { MemberI, useMembers } from "../lib/hooks";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";

export const ManageMembersPage = () => {
  const { members, addMember } = useMembers();
  const form = useForm({
    initialValues,
    validate: {
      firstName: (val) => (val.length < 1 ? "First Name is Required" : null),
      lastName: (val) => (val.length < 1 ? "Last Name is Required" : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) || value.length < 1 ? null : "Invalid email",
    },
  });

  const handleSubmit = (values: MemberI) => {
    addMember(values);
    form.setValues(initialValues);
  };
  return (
    <PageContainer>
      <Grid>
        <Grid.Col span={8}>
          <Title order={2}>Family Members</Title>
          <Card>
            <List spacing="xs" size="sm" center>
              {members.map((m) => (
                <List.Item
                  key={m._id}
                  icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                      {m.firstName[0]}
                      {m.lastName[0]}
                    </ThemeIcon>
                  }
                >
                  <Link to={`/member/${m._id}`}>
                    <NavLink label={m.firstName + " " + m.lastName} />
                  </Link>
                </List.Item>
              ))}
            </List>
          </Card>
        </Grid.Col>

        <Grid.Col span={4} style={{ borderLeft: "1px solid #dee2e6" }}>
          <Fieldset legend="Add Member">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                label="First name"
                placeholder="First name"
                {...form.getInputProps("firstName")}
              />
              <TextInput
                label="Middle name"
                placeholder="Middle name"
                {...form.getInputProps("middleName")}
              />
              <TextInput
                label="Last name"
                placeholder="Last name"
                {...form.getInputProps("lastName")}
              />
              <TextInput
                label="Email"
                placeholder="Email"
                {...form.getInputProps("email")}
              />
              <Group justify="flex-end" mt="md">
                <Button type="submit" my="lg">
                  Add
                </Button>
              </Group>
            </form>
          </Fieldset>
        </Grid.Col>
      </Grid>
    </PageContainer>
  );
};
