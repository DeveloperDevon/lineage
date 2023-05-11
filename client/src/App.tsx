import { useEffect } from 'react'
import { AppBar } from "./layout"
import { Router } from './Router'
import { MantineProvider } from '@mantine/core';
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get('http://localhost:8000/members').then(console.log)
  }, [])

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppBar />
      <Router />
    </MantineProvider>
  )
}

export default App
