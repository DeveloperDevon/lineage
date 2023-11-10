import { AppShell, Group, Title } from "@mantine/core";

export const AuthContainer: React.FC<any> = ({ children }) => {
  return (
    <AppShell
      header={{
        height: {
          base: 60,
          md: 70,
          lg: 80,
        },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Title>Kin</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
