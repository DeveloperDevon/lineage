import { Text } from "@mantine/core";
import { useAuth } from "../lib/queries";
import { MemberInfo } from "../components/members/MemberInfo";

export const HomePage = () => {
  const { data: user } = useAuth();

  if (!user?.id) return <Text>No User Found</Text>;

  return (
    <>
      <MemberInfo id={user?.id} />
    </>
  );
};
