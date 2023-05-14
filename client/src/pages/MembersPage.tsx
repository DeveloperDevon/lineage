import { Tabs } from '@mantine/core';
import { IconUsersGroup, IconUserPlus } from '@tabler/icons-react';
import { PageContainer } from '../layout';
import { AddMember, ManageMembers } from '../components';

export const ManageMembersPage = () => {
  return (
    <PageContainer>
      <Tabs defaultValue='familyMembers'>
        <Tabs.List>
          <Tabs.Tab value='familyMembers' icon={<IconUsersGroup size='0.8rem' />}>Family Members</Tabs.Tab>
          <Tabs.Tab value='addMember' icon={<IconUserPlus size='0.8rem' />}>Add Member</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='familyMembers'>
          <ManageMembers />
        </Tabs.Panel>
        <Tabs.Panel value='addMember'>
          <AddMember />
        </Tabs.Panel>
      </Tabs>
    </PageContainer>
  )
}
