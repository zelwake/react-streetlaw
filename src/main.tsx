import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './assets/index.css'
import { router } from './pages/router'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <main className="font-Titillium min-h-screen flex flex-col">
        <RouterProvider router={router} />
      </main>
    </QueryClientProvider>
  </React.StrictMode>
)
