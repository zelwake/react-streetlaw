import ErrorPage from '@/components/ErrorPage'
import Layout from '@/components/ui/Layout/Layout'
import { createBrowserRouter } from 'react-router-dom'
import Home from './home/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
