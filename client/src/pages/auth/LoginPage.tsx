import { PageContainer } from "../../layout";
import { useNavigate } from "react-router-dom";
import { Box, Button, Center, TextInput, Title } from "@mantine/core";
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
    <PageContainer>
      <Center mt="lg">
        <Box>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Title my="lg" order={4}>
              Login
            </Title>
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
            <Button type="submit" my="lg">
              Login
            </Button>
          </form>
        </Box>
      </Center>
    </PageContainer>
  );
};
