import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Credits from './components/Credits/Credits.jsx';
import Projects from './components/Projects/Projects.jsx';
import Root from './routes/root.jsx';
import Error from './Error.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import NavMenu from './components/NavMenu/NavMenu.jsx';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'




const router = createBrowserRouter([
  {
    path: "/",
    element: <NavMenu />,
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
      }
    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
