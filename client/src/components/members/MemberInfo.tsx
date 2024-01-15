import { useFamilyMembers } from "../../lib/queries";
import { Stack } from "@mantine/core";

type Props = {
  id: number;
};

export const MemberInfo = ({ id }: Props) => {
  const { data: family } = useFamilyMembers(id)

  return (
    <Stack>
      <pre>{JSON.stringify(family, null, 2)}</pre>
    </Stack>
  )
}