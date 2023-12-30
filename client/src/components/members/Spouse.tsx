import { FC, useState } from 'react'
import { useQuery } from 'react-query';
import { Button, Card, Container, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { membersQuery } from '../../lib/queries';
import { Member } from '../../lib/types';
import { server } from '../../lib/axios';
import { MemberCard } from '.';

interface SpouseProps {
  member?: Member
  spouse?: Member
}

export const Spouse: FC<SpouseProps> = ({ member, spouse }) => {
  const [selectedSpouse, setSelectedSpouse] = useState<Member | null>(null)
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = useQuery('members', membersQuery)

  const handleSubmit = async () => {
    const memberId = member?._id
    const spouseId = selectedSpouse?._id
    console.log({ memberId, spouseId })

    try {
      const response = await server.put('/members/spouse-relationship', {
        memberId,
        spouseId: selectedSpouse?._id,
      })
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title='' centered fullScreen>
        <Container>
          <div>{data?.filter((a) => a._id !== member?._id).map((d) => (
            <div key={d._id} onClick={() => setSelectedSpouse(d)}>
              {d.firstName} {d.lastName}
            </div>
          ))}</div>
        </Container>
        <Container mt='3rem'>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!selectedSpouse}>Confirm</Button>
        </Container>
      </Modal>

      <Container>
        <h4>Spouse {spouse?.firstName}</h4>
        {spouse ? <MemberCard member={spouse} /> :
          <Card withBorder style={{ width: '47%' }} mx='5px' onClick={open}>
            Add Spouse
          </Card>}
      </Container>
    </>
  )
}
