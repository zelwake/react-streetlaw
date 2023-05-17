import Layout from '@/components/ui/Layout/Layout'
import ErrorPage from '@/pages/ErrorPage'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './home/home'
import NewsPage, { Category } from './newsPage/NewsPage'
import PageSlug from './pageSlug/pageSlug'
import SingleNews from './singleNews/single'

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
            element: <SingleNews />,
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
            element: <SingleNews />,
          },
        ],
      },
      {
        path: ':slug',
        element: <PageSlug />,
      },
    ],
  },
])
