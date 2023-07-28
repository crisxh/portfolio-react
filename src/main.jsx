import React from 'react'
import ReactDOM from 'react-dom/client'

import Credits from './components/Credits/Credits.jsx';
import Projects from './components/Projects/Projects.jsx';
import Root from './components/Root/Root.jsx';
import Error from './Error.jsx';
import Welcome from './components/Welcome/Welcome.jsx';

import About from './components/About/About.jsx';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [

      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "credits",
        element: <Credits />
      },
      {
        path: "home",
        element: <Welcome />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
