import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { server } from "../axios";
import { Member } from "../types";

const setParent = async (user: Partial<Member>) => {
  const response = await server.post("/members/", user);
  return response.data;
};

export const useSetParentMutation = () => {
  return useMutation({
    mutationFn: setParent,
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};
