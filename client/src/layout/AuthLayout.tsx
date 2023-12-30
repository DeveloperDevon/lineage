import { AppShell, Group, Title } from "@mantine/core";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
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

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
