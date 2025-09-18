import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Providers from './components/normal/Providers.tsx'
import { router } from './router/routes.tsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Providers>
  </StrictMode>,
)
