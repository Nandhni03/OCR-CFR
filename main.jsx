import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css"
import ProfilesPage from './ProfilesPage'
import NotFoundPage from './NotFoundPage'
import ProfilePage from './ProfilePage'
import TablePage from './TablePage'

const router = createBrowserRouter([
  {
  path: '/',
  element:  <TablePage />,
  errorElement: <NotFoundPage />,
  },
  {
    path: '/profiles',
    element: <ProfilesPage />,
    children: [
      {
        path: '/profiles/:profileId',
        element: <ProfilePage />,
      },
    ]
  },
  // {
  //   path: '/profiles/:profileId',
  //   element: <ProfilePage />,
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
