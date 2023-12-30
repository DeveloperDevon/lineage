import { Text } from "@mantine/core";
import { useAuth, useFamilyMembers } from "../lib/queries";

export const HomePage = () => {
  const { data: user } = useAuth();
  const { data: userFamily } = useFamilyMembers(user?._id)

  return (
    <>
      <Text size='xl'>{user?.firstName} {user?.lastName}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>Father: {userFamily?.father?.firstName} {userFamily?.father?.lastName}</Text>
      <Text>Mother: {userFamily?.mother?.firstName} {userFamily?.mother?.lastName}</Text>
      <Text mb={20}>User</Text>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Text mb={20}>User Family</Text>
      <pre>{JSON.stringify(userFamily, null, 2)}</pre>
    </>
  );
};
