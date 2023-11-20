import { FC } from "react";
import { Drawer } from "@mantine/core";
import { AddMemberForm } from "./AddMemberForm";

interface AddRelationshipDrawerProps {
  opened: boolean;
  open: () => void;
  close: () => void;
}

export const AddRelationshipDrawer: FC<AddRelationshipDrawerProps> = ({
  opened,
  close,
}) => {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        title="Add Relationship"
      >
        <AddMemberForm />
      </Drawer>
    </>
  );
};
