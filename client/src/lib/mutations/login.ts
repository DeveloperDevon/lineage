import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { server } from "../axios";
import { Member } from "../types";

const login = async (user: Partial<Member>) => {
  const response = await server.post("/auth/login", user);
  return response.data
};

export const useLoginMutation = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: login,
    // mutationFn: () => new Promise((_, reject) => setTimeout(() => reject('NOPE'), 5000)),
    onSuccess: (res: any) => {
      console.log(res)
      // navigate(`/member/${res.member._id}`, { replace: true })
      navigate('/', { replace: true })
    },
    onError: (err) => {
      console.error(err)
    }
  })
}