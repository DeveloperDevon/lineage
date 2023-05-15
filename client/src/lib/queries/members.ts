import axios from 'axios'
import { IMember } from '../types'

export const membersQuery = async (): Promise<IMember[]> => axios.get('http://localhost:8000/members')
  .then((res) => {
    const members = res.data ?? []
    return members
  })
