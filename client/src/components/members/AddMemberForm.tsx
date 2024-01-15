import { Fieldset, TextInput, Group, Button, Select } from "@mantine/core"
import { useForm } from "@mantine/form";
import { useAddMemberMutation } from "../../lib/mutations";
import { useEffect } from "react";

type Props = {
  onClose: () => void
}

export const AddMemberForm = ({ onClose }: Props) => {
  const addMemberMutation = useAddMemberMutation()
  const initialValues = {
    firstName: "Clayton",
    lastName: "Reichardt",
    middleName: "",
    email: "",
    gender: "male"
  };

  const form = useForm({
    initialValues,
    validate: {
      firstName: (val) => (val.length < 1 ? "First Name is Required" : null),
      lastName: (val) => (val.length < 1 ? "Last Name is Required" : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) || value.length < 1 ? null : "Invalid email",
    },
  });

  const handleSubmit = (values: any) => {
    addMemberMutation.mutate(values)
  };

  useEffect(() => {
    if (addMemberMutation.isSuccess) onClose()

  }, [addMemberMutation.isSuccess])

  return (
    <Fieldset legend="Add Member">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="First name"
          placeholder="First name"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Middle name"
          placeholder="Middle name"
          {...form.getInputProps("middleName")}
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          {...form.getInputProps("lastName")}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <Select label="Gender" placeholder="Gender" {...form.getInputProps('gender')} data={['male', 'female']} />
        <Group justify="flex-end" mt="md">
          <Button type="submit" my="lg">
            Add
          </Button>
        </Group>
      </form>
    </Fieldset>
  )
}
