import { ActionIcon, Affix, Card, List, Modal, NavLink, Stack, ThemeIcon, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMembers } from "../lib/queries";
import { AddMemberForm, PageLoader } from "../components";
import { IconPlus } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export const ManageMembersPage = () => {
  const { data: members, isLoading } = useMembers();
  const [opened, { open, close }] = useDisclosure()
  console.log({ members })

  if (isLoading) return <PageLoader />

  return (
    <Stack>
      <Affix position={{ bottom: 20, right: 20 }}>
        <ActionIcon radius='100%' size='xl' onClick={open}>
          <IconPlus />
        </ActionIcon>
      </Affix>
      <Modal title='Add Family Member' opened={opened} onClose={close}>
        <AddMemberForm onClose={close} />
      </Modal>
      <Title fw='normal' order={2}>Family Members</Title>
      <Card>
        <List spacing="xs" size="sm" center>
          {members?.map((m, i) => (
            <List.Item
              key={i}
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  {m.firstName[0]}
                  {m.lastName[0]}
                </ThemeIcon>
              }
            >
              <NavLink label={m.firstName + " " + m.lastName} component={Link} to={`/member/${m.id}`} />
            </List.Item>
          ))}
        </List>
      </Card>
    </Stack>
  )
};
