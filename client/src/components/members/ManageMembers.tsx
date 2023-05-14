import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Avatar } from '@mantine/core'
import { membersQuery } from '../../lib/queries'

export const ManageMembers = () => {
  // const [members, setMembers] = useState<any[]>([]) // TODO: move to global state to reduce db calls
  const { data, status } = useQuery('members', membersQuery)

  const navigate = useNavigate()

  const handleClick = (memberId: string) => {
    navigate(`/member/${memberId}`)
  }

  if (status === 'loading') return <div>Loading...</div>

  return (

    <div>
      {data?.length && data.map((m: any) => (
        <div key={m._id} onClick={() => handleClick(m._id)} style={{ display: 'flex', alignItems: 'center' }}>
          <div><Avatar></Avatar></div>
          <div>
            {m.firstName} {m.lastName}
          </div>
        </div>
      ))}
    </div>
  )
}
