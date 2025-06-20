import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CardContainer } from './components/CardContainer.jsx'
import App from './App.jsx'
import "./styles/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/boards/:boardId/cards",
    element: <CardContainer />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
