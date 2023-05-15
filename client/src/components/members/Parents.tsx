import { FC, useState } from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { membersQuery } from '../../lib/queries';
import { IMember } from '../../lib/types'
import axios from 'axios'

interface ParentsProps {
  mother?: IMember
  father?: IMember
  member?: IMember
}

export const Parents: FC<ParentsProps> = ({ mother, father, member }) => {
  const [selectedParent, setSelectedParent] = useState<any>()
  const [selectedRelationship, setSelectedRelationship] = useState<'mother' | 'father' | undefined>(undefined)
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate()
  const { data } = useQuery('members', membersQuery)

  const openModal = (relationship: 'mother' | 'father') => {
    setSelectedRelationship(relationship)
    open()
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.put('http://localhost:8000/members/child-parent-relationship', {
        relationship: selectedRelationship,
        parent: selectedParent,
        child: member
      })
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title={`Add ${selectedRelationship}`} centered fullScreen>
        <Container>
          {selectedParent &&
            <h4>Set {selectedParent.firstName} {selectedParent.lastName} as a {selectedRelationship} to {member?.firstName} {member?.lastName}</h4>
          }
          <div>{data?.filter((a: any) => a._id !== member?._id).map((d: any) => (
            <div key={d._id} onClick={() => setSelectedParent(d)}>
              {d.firstName} {d.lastName}
            </div>
          ))}</div>
        </Container>
        <Container mt='3rem'>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!selectedParent}>Confirm</Button>
        </Container>
      </Modal>

      <Container>
        <h4>Parents</h4>
      </Container>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        {mother ? <Card withBorder style={{ width: '100%' }} mx='5px' onClick={() => navigate(`/member/${mother._id}`)}>
          {mother.firstName} {mother.lastName}
        </Card>
          :
          <Card withBorder style={{ width: '100%' }} mx='5px' onClick={() => openModal('mother')}>
            Add Mother
          </Card>
        }
        {father ?
          <Card withBorder style={{ width: '100%' }} mx='5px' onClick={() => navigate(`/member/${father._id}`)}>
            {father.firstName} {father.lastName}
          </Card>
          :
          <Card withBorder style={{ width: '100%' }} mx='5px' onClick={() => openModal('father')}>
            Add Father
          </Card>
        }
      </Container>
    </>
  )
}
