import { AppBar } from './AppBar.tsx'

export const PageContainer: React.FC<any> = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  )
}
