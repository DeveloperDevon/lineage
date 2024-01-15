import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Avatar,
  Burger,
  Group,
  Menu,
  NavLink,
  Title,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { Outlet, NavLink as Link, useLocation } from "react-router-dom";
import { useAuth } from "../lib/queries";
import { PageLoader } from "../components";
import { useLogoutMutation } from "../lib/mutations/logout";

export const DefaultLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const { data: user, isLoading } = useAuth();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const logout = useLogoutMutation();

  const location = useLocation();

  const toggleTheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Comments", path: "/comments" },
    { label: "Photo Album", path: "/photos" },
    { label: "Members", path: "/members" },
  ];

  if (isLoading) return <PageLoader />;

  return (
    <AppShell
      padding="md"
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        // width: 300,
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: "sm",
        // collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Title>Kin</Title>
          </Group>
          <Group>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <UnstyledButton>
                  <Avatar color="blue">
                    {user?.firstName[0]}
                    {user?.lastName[0]}
                  </Avatar>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Profile</Menu.Item>
                <Menu.Item onClick={toggleTheme}>
                  {colorScheme === "dark" ? "Light Mode" : "Dark Mode"}
                </Menu.Item>
                <Menu.Item onClick={() => logout.mutate()}>Logout</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {navLinks.map(({ label, path }) => (
          <NavLink
            key={label}
            variant="filled"
            label={label}
            component={Link}
            to={path}
            active={location.pathname === path}
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
