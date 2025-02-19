import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={routes}></RouterProvider>
    </HelmetProvider>
  </StrictMode>,
)
//steps of using Helmet title
// 1.install nmp i react-helmet-async
// 2.wrap RouterProvider in HelmetProvider
// 3. use Helmet where you need