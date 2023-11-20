import { useEffect, useState } from "react";
import { PageContainer } from "../layout";
import { Title } from "@mantine/core";
import { MemberI, useAuth } from "../lib/hooks";
import { FamilyMemberGroup } from "../components/members/FamilyMemberGroup";
import { server } from "../lib/axios";

export const HomePage = () => {
  const { member } = useAuth();
  const [memberFamily, setMemberFamily] = useState<MemberI | null>(null);

  const getFamily = async (id: string) => {
    const response = await server.get(`/members/family?id=${id}`);
    setMemberFamily(response.data);
  };

  useEffect(() => {
    if (member?._id) getFamily(member?._id);
  }, [member?._id]);

  return (
    <PageContainer>
      <Title mb={20} order={2}>
        My Family
      </Title>
      <FamilyMemberGroup title="Parents" members={[]} />
      <FamilyMemberGroup title="Spouse" members={memberFamily?.spouse} />
      <FamilyMemberGroup title="Children" members={memberFamily?.children} />
    </PageContainer>
  );
};
