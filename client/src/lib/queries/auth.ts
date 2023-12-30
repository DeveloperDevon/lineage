import { useQuery } from "react-query";
import { server } from "../axios";
import { Member } from "../types";
import { useNavigate } from "react-router-dom";

const getAuth = async (): Promise<Member> => {
  return await server.get("/auth")
    .then(res => res.data.member)
};

export const useAuth = () => {
  const navigate = useNavigate()

  return useQuery({
    queryFn: getAuth,
    queryKey: ['auth'],
    onError: () => {
      navigate('/auth/login')
    }
  })
}