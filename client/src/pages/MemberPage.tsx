import { useParams } from "react-router-dom"
import { PageContainer } from "../layout"
import { Avatar } from '@mantine/core'
import { useQuery } from 'react-query'
import { membersQuery } from '../lib/queries'
import { Parents, Siblings, Spouse } from "../components"

export const MemberPage = () => {
  const { memberId } = useParams()
  const { data, status } = useQuery('members', membersQuery)

  if (status === 'loading') return <div>Loading...</div>

  const member = data?.find((a: any) => a._id === memberId)
  const mother = data?.find((d: any) => d._id === member?.motherId)
  const father = data?.find((d: any) => d._id === member?.fatherId)

  const siblings = data?.filter((d: any) => (
    (!!d.fatherId && d.fatherId === father?._id || !!d.motherId && d.motherId === mother?._id) &&
    d._id !== memberId)
  )

  const spouse = data?.find(d => d._id === member?.spouseId)

  return (
    <PageContainer>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <Avatar size='xl'></Avatar>
      </div>
      <h3 style={{ textAlign: 'center' }}>{member?.firstName} {member?.lastName}</h3>
      <Parents mother={mother} father={father} member={member} />
      <Siblings siblings={siblings} />
      <Spouse member={member} spouse={spouse} />
    </PageContainer>
  )
}
