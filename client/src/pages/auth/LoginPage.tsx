import { AuthContainer } from "../../layout";
import { useNavigate } from "react-router-dom";
import { Button, Container, Fieldset, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { server } from "../../lib/axios";

export const LoginPage = () => {
  const navigate = useNavigate();
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
    const response = await server.post("/auth/login", values);
    const { verified } = response.data;
    if (verified) navigate("/", { replace: true });
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
