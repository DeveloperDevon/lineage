import { FC } from 'react'
import { Card } from '@mantine/core'
import { IMember } from '../../lib/types'
import { useNavigate } from 'react-router-dom'

interface IMemberCardProps {
  member: IMember
}

export const MemberCard: FC<IMemberCardProps> = ({ member }) => {
  const navigate = useNavigate()

  return (
    <Card withBorder style={{ width: '50%' }} mx='5px' onClick={() => navigate(`/member/${member._id}`)}>
      {member.firstName} {member.lastName}
    </Card>
  )
}
