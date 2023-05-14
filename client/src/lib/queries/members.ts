import axios from 'axios'

export const membersQuery = async () => axios.get('http://localhost:8000/members')
  .then((res) => {
    const members = res.data
    return members
  })
