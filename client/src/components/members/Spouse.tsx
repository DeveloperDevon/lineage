import { FC, useState } from 'react'
import { useQuery } from 'react-query';
import { Button, Card, Container, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { membersQuery } from '../../lib/queries';
import { IMember } from '../../lib/types';
import axios from 'axios'
import { MemberCard } from '.';

interface SpouseProps {
  member?: IMember
  spouse?: IMember
}

export const Spouse: FC<SpouseProps> = ({ member, spouse }) => {
  const [selectedSpouse, setSelectedSpouse] = useState<IMember | null>(null)
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = useQuery('members', membersQuery)

  const handleSubmit = async () => {
    const memberId = member?._id
    const spouseId = selectedSpouse?._id
    console.log({ memberId, spouseId })

    try {
      const response = await axios.put('http://localhost:8000/members/spouse-relationship', {
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
