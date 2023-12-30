import { Fieldset, TextInput, Group, Button } from "@mantine/core"
import { useForm } from "@mantine/form";

export const AddMemberForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
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
    // addMember(values);
    console.log(values)
    // form.setValues(initialValues);
  };

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
        <Group justify="flex-end" mt="md">
          <Button type="submit" my="lg">
            Add
          </Button>
        </Group>
      </form>
    </Fieldset>
  )
}
