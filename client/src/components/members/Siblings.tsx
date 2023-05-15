import { FC } from 'react'
import { Card, Container } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { IMember } from '../../lib/types'

interface SiblingsProps {
  siblings?: IMember[]
}

export const Siblings: FC<SiblingsProps> = ({ siblings }) => {
  const navigate = useNavigate()

  if (!siblings?.length) return null

  return (
    <>
      <Container>
        <h4>Siblings</h4>
      </Container>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        {siblings.map((s: any) => (
          <Card withBorder key={s._id} w='100%' mx='5px' onClick={() => navigate(`/member/${s._id}`)}>
            {s.firstName} {s.lastName}
          </Card>
        ))}
      </Container>
    </>
  )
}
