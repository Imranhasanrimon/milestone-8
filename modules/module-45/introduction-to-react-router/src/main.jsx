import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: "/about",
    element: <div>this is about page</div>
  },
  {
    path: '/contact',
    element: <div>this is contact page</div>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
