import Layout from '@/components/ui/Layout/Layout'
import ErrorPage from '@/pages/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'
import Home from './home/home'
import NewsPage from './news/NewsPage'

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
      {
        path: '/aktuality/',
        element: <NewsPage />,
      },
    ],
  },
])
