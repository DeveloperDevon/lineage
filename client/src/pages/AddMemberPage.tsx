import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';

export const AddMemberPage = () => {
  const form = useForm({
    initialValues: {
      firstName: 'a',
      middleName: 'b',
      lastName: 'c',
    },

    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    // },
  });

  const handleSubmit = async (values: any) => {
    await axios.post('http://localhost:8000/member', values)
      .then(console.log)
      .catch(console.error)
    // await axios.get('http://localhost:8000')
    // alert(JSON.stringify(values))
    console.log(values)
  }

  return (
    <div>
      {/* <h2 style={{ textAlign: 'center' }}>Add Member</h2> */}
      <Box maw={300} mx="auto">
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
          {/* <Checkbox */}
          {/*   mt="md" */}
          {/*   label="I agree to sell my privacy" */}
          {/*   {...form.getInputProps('termsOfService', { type: 'checkbox' })} */}
          {/* /> */}

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </div>
  )
}
