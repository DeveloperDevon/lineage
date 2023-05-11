import { useEffect, useState } from 'react'
import { Tabs } from '@mantine/core';
import { IconUsersGroup, IconUserPlus } from '@tabler/icons-react';
import axios from 'axios'
import { AddMemberPage } from '.';

export const ManageMembersPage = () => {
  const [members, setMembers] = useState<any[]>([]) // TODO: move to global state to reduce db calls
  useEffect(() => {
    axios.get('http://localhost:8000/members').then((res) => setMembers(res.data))
  }, [])

  return (
    <div>
      <Tabs defaultValue='familyMembers'>
        <Tabs.List>
          <Tabs.Tab value='familyMembers' icon={<IconUsersGroup size='0.8rem' />}>Family Members</Tabs.Tab>
          <Tabs.Tab value='addMember' icon={<IconUserPlus size='0.8rem' />}>Add Member</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='familyMembers'>
          <div>
            {members.length && members.map(m => (
              <div key={m._id}>
                {m.firstName} {m.middleName ?? ''} {m.lastName}
              </div>
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value='addMember'>
          <AddMemberPage />
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}
