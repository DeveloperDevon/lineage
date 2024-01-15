import { useMutation, useQueryClient } from "react-query";
import { server } from "../../axios";
import { Member } from "../../types";

const addNewMemberRequest = async (member: Partial<Member>) => {
  const response = await server.post("/members", member);
  return response.data
};

export const useAddMemberMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: addNewMemberRequest,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] })
    },
    onError: (err) => {
      console.error(err)
    }
  })
}