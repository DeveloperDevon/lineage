import { Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import './AppBar.css'

export const AppBar = () => {
  const navigate = useNavigate()
  return (
    <div className='appbar-container'>
      <Title order={3} onClick={() => navigate('/')}>Lineage</Title>
    </div>
  )
}
