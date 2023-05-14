import { useParams } from "react-router-dom"
import { PageContainer } from "../layout"
import { Avatar, Card, Container } from '@mantine/core'
import { useQuery } from 'react-query'
import { membersQuery } from '../lib/queries'
import { Parents } from "../components"

export const MemberPage = () => {
  const { memberId } = useParams()
  const { data, status } = useQuery('members', membersQuery)

  if (status === 'loading') return <div>Loading...</div>

  const member = data.find((a: any) => a._id === memberId)
  const mother = data.find((d: any) => d._id === member.motherId)
  const father = data.find((d: any) => d._id === member.fatherId)
  const siblings = data.filter((d: any) => (
    (!!d.fatherId && d.fatherId === father?._id || !!d.motherId && d.motherId === mother?._id) &&
    d._id !== memberId)
  )

  return (
    <PageContainer>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <Avatar size='xl'></Avatar>
      </div>
      <h3 style={{ textAlign: 'center' }}>{member?.firstName} {member?.lastName}</h3>
      <Parents mother={mother} father={father} member={member} />
      {siblings?.length ? <Container>
        <h4>Siblings</h4>
      </Container> : null}
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        {siblings?.length ? siblings.map((s: any) => (
          <Card withBorder key={s._id} w='100%' mx='5px'>
            {s.firstName} {s.lastName}
          </Card>
        )
        ) : null}
      </Container>
    </PageContainer>

  )
}
