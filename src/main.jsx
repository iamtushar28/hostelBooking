import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Properties from './pages/Rooms.jsx'
import SignIn from './pages/Login.jsx'
import SignUp from './pages/Register.jsx'
import Details from './pages/propertyDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/rooms',
    element: <Properties />
  },
  {
    path: '/signIn',
    element: <SignIn />
  },
  {
    path: '/signUp',
    element: <SignUp />
  },
  {
    path: '/details',
    element: <Details />
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
