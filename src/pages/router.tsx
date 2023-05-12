import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/ui/Layout/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
])
