import { PageContainer } from "../../layout"
import { Box, Button, Center, TextInput, Title } from '@mantine/core';
import { useForm } from "@mantine/form";
import { server } from "../../lib/axios";

export const LoginPage = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleSubmit = (values: { email: string, password: string }) => {
        console.log(values)
        server.post('/auth/login', values)
    }

    return (
        <PageContainer>
            <Center mt='lg'>
                <Box>
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <Title my='lg' order={4}>Login</Title>
                        <TextInput {...form.getInputProps('email')} label='Email' placeholder='Enter email' />
                        <TextInput {...form.getInputProps('password')} label='Password' placeholder='Enter password' />
                        <Button type='submit' my='lg'>Login</Button>
                    </form>
                </Box>
            </Center>
        </PageContainer>
    )
}