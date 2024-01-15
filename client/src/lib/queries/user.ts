import { useQuery } from "react-query";
import { server } from "../axios";
import { Member } from "../types";

export const userQuery = async (): Promise<Member[]> =>
  server.get("/auth").then((res) => {
    const members = res.data ?? [];
    return members;
  });

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: userQuery
  })
}