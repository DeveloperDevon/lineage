import { useParams } from "react-router-dom";
import { useFamilyMembers } from "../lib/queries";
import { PageLoader } from "../components";
import { Center, Text } from "@mantine/core";

export const MemberPage = () => {
  const params = useParams();
  const { memberId } = params;

  const { data: member, isLoading, isError } = useFamilyMembers(memberId)

  if (isLoading) return <PageLoader />

  if (isError) return (
    <Center>
      <Text>No Member Found</Text>
    </Center>
  )

  return (
    <>
      <Text size='xl'>{member?.firstName} {member?.lastName}</Text>
      <pre>{JSON.stringify(member, null, 2)}</pre>
      {/* {memberFamily && <FamilyTabs memberFamily={memberFamily} />} */}
    </>
  );
};
