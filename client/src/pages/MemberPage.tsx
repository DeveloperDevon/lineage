import { useEffect, useState } from "react";
import { PageContainer } from "../layout";
import { server } from "../lib/axios";
import { useParams } from "react-router-dom";
import { MemberI } from "../lib/types";
import { FamilyTabs } from "../components/members/family/FamilyTabs";

export const MemberPage = () => {
  const params = useParams();
  const [memberFamily, setMemberFamily] = useState<MemberI | null>(null);
  const { memberId } = params;

  const getFamily = async (id: string) => {
    const response = await server.get(`/members/family?id=${id}`);
    console.log(response.data);
    setMemberFamily(response.data);
  };

  useEffect(() => {
    if (memberId) getFamily(memberId);
  }, [memberId]);

  // if (!memberFamily?._id) return <>No member found</>;

  return (
    <PageContainer>
      {memberFamily && <FamilyTabs memberFamily={memberFamily} />}
    </PageContainer>
  );
};
