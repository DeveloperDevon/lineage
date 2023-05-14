import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, MemberPage, ManageMembersPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/member/:memberId',
    element: <MemberPage />
  },
  {
    path: '/members',
    element: <ManageMembersPage />
  }
])

export const Router = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <RouterProvider router={router} />
    </div>
  )
}
