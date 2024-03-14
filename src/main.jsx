import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Resume from './Resume/Resume.jsx'
import Portfilo from './portfilo/Portfilo.jsx'
import Contact from './Contact/Contact.jsx'

const router = createBrowserRouter
  ([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element:<About/>
        },
        {
          path: '/resume',
          element: <Resume />
        },
        {
          path: '/portfilo',
          element: <Portfilo />
        },
        // {
        //   path: '/blogs',
        //   element: <Resume />
        // },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    },
    
    
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
