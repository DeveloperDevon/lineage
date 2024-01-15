import { useQuery } from "react-query";
import { server } from "../axios";
import { User } from "../types";

export const membersQuery = async (): Promise<User[]> =>
  server.get("/members").then((res) => {
    const members = res.data.members ?? [];
    return members;
  });

export const useMembers = () => {
  return useQuery({
    queryKey: ['members'],
    queryFn: membersQuery
  })
}