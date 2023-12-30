import { useQuery } from "react-query"
import { server } from "../axios"

const getFamilyMembers = async (id: string | undefined) => {
  const response = await server.get(`/members/family?id=${id}`)
  return response.data
}

export const useFamilyMembers = (id: string | undefined) => {
  return useQuery({
    queryFn: async () => getFamilyMembers(id),
    queryKey: ['familyMembers', { id }],
    enabled: !!id
  })
}