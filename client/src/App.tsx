import { useEffect } from 'react'
import { Router } from './Router'
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query'
import axios from 'axios'

function App() {
  const queryClient = new QueryClient()
  useEffect(() => {
    axios.get('http://localhost:8000/members').then(console.log)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* <AppBar /> */}
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
