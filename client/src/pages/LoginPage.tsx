import { Button, Container, Fieldset, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useLoginMutation } from "../lib/mutations";

export const LoginPage = () => {
  const loginMutation = useLoginMutation()

  const form = useForm({
    initialValues: {
      email: "reichardt22@gmail.com",
      password: "a",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    loginMutation.mutate(values)
  };

  return (
    <Container size="xs" mt={40}>
      <Fieldset legend="Login">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            {...form.getInputProps("email")}
            label="Email"
            placeholder="Enter email"
          />
          <TextInput
            {...form.getInputProps("password")}
            label="Password"
            placeholder="Enter password"
          />
          <Group justify="flex-end" mt="md">
            <Button loading={loginMutation.isLoading} type="submit" my="lg">
              Login
            </Button>
          </Group>
        </form>
      </Fieldset>
    </Container>
  );
};
