import { useParams } from "react-router-dom";
import { Center, Text } from "@mantine/core";
import { MemberInfo } from "../components/members/MemberInfo";

export const MemberPage = () => {
  const params = useParams();
  const { memberId } = params;

  if (!memberId)
    return (
      <Center>
        <Text>No Member Found</Text>
      </Center>
    );

  return (
    <>
      <MemberInfo memberId={memberId} />
    </>
  );
};
