import { server } from '../axios'
import { IMember } from '../types'

export const membersQuery = async (): Promise<IMember[]> => server.get('/members')
  .then((res) => {
    const members = res.data ?? []
    return members
  })
