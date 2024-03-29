import Layout from '@/components/ui/Layout/Layout'
import ErrorPage from '@/pages/ErrorPage'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './home/home'
import NewsPage, { Category } from './newsPage/NewsPage'
import NewsSlug from './newsSlug/newsSlug'
import PageSlug from './pageSlug/pageSlug'
import Team from './team/team'

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
        path: 'aktuality',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <NewsPage category={Category.news} />,
          },
          {
            path: ':slug',
            element: <NewsSlug />,
          },
        ],
      },
      {
        path: 'medialni-ohlasy',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <NewsPage category={Category.media} />,
          },
          {
            path: ':slug',
            element: <NewsSlug />,
          },
        ],
      },
      {
        path: 'nas-tym',
        element: <Team />,
      },
      {
        path: ':slug',
        element: <PageSlug />,
      },
    ],
  },
])
