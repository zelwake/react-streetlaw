import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './assets/index.css'
import { router } from './pages/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className="font-Titillium">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
)
