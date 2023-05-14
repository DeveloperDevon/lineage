import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';

export const AddMember = () => {
  const form = useForm({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
    },

    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    // },
  });

  const handleSubmit = async (values: any) => {
    await axios.post('http://localhost:8000/member', values)
      .then(console.log)
      .catch(console.error)
    console.log(values)
  }

  return (
    <div>
      <Box p="10px">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="First Name"
            // placeholder=""
            {...form.getInputProps('firstName')}
          />
          <TextInput
            label="Middle Name"
            // placeholder=""
            {...form.getInputProps('middleName')}
          />
          <TextInput
            withAsterisk
            label="Last Name"
            // placeholder=""
            {...form.getInputProps('lastName')}
          />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </div>
  )
}
