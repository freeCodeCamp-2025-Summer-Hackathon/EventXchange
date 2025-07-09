import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { router } from './routes/Routes.js';
import { RouterProvider } from 'react-router-dom';
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
