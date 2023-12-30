import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { server } from "../axios";

const logout = async () => {
  const response = await server.post("/auth/logout");
  return response.data
};

export const useLogoutMutation = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: logout,
    // mutationFn: () => new Promise((_, reject) => setTimeout(() => reject('NOPE'), 5000)),
    onSuccess: () => {
      navigate(`/auth/login`, { replace: true })
    },
    onError: (err) => {
      console.error(err)
    }
  })
}