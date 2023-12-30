import { useQuery } from "react-query";
import { server } from "../axios";
import { Member } from "../types";

export const membersQuery = async (): Promise<Member[]> =>
  server.get("/members").then((res) => {
    const members = res.data ?? [];
    return members;
  });

export const useMembers = () => {
  return useQuery({
    queryKey: ['members'],
    queryFn: membersQuery
  })
}