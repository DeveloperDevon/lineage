import { AuthContainer } from "../../layout";
import { Button, Container, Fieldset, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../../lib/hooks";

export const LoginPage = () => {
  const { login } = useAuth();

  const form = useForm({
    initialValues: {
      email: "reichardt22@gmail.com",
      password: "a",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    await login(values);
  };

  return (
    <AuthContainer>
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
              <Button type="submit" my="lg">
                Login
              </Button>
            </Group>
          </form>
        </Fieldset>
      </Container>
    </AuthContainer>
  );
};
