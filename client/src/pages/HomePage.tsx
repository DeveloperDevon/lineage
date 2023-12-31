import { Text } from "@mantine/core";
import { useAuth, useFamilyMembers } from "../lib/queries";
import { Member } from "../lib/types";
import { MemberInfo } from "../components/members/MemberInfo";

export const HomePage = () => {
  const { data: user } = useAuth();

  if (!user?._id) return <Text>No User Found</Text>;

  return (
    <>
      <MemberInfo memberId={user?._id} />
    </>
  );
};
