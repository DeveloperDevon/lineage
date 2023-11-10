import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Title, UnstyledButton } from "@mantine/core";
import { NavLink } from "react-router-dom";

export const PageContainer: React.FC<any> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: 300,
        // width: { base: 200, md: 300, lg: 400 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title>Kin</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink to="/">
          <UnstyledButton>Home</UnstyledButton>
        </NavLink>
        <UnstyledButton>Photos</UnstyledButton>
        <UnstyledButton>Comments</UnstyledButton>
        <NavLink to="/members">
          <UnstyledButton>Members</UnstyledButton>
        </NavLink>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
