import ErrorPage from '@/components/ErrorPage'
import Layout from '@/components/ui/Layout/Layout'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
])
