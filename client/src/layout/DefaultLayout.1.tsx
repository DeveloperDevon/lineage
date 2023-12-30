import { useDisclosure } from "@mantine/hooks";
import { AppShell, Avatar, Burger, Group, Menu, Title, UnstyledButton } from "@mantine/core";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../lib/queries";
import { PageLoader } from "../components";


export const DefaultLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const { data, isLoading } = useAuth();

  if (isLoading) return <PageLoader />;

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
        <Group h="100%" px="md" justify='space-between'>
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title>Kin</Title>
          </Group>
          <Group>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar>{data?.firstName[0]}{data?.lastName[0]}</Avatar>
                <Button>Toggle menu</Button>
              </Menu.Target>
            </Menu>
          </Group>
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

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
