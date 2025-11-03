import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import Home from './components/Home.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Error from './components/Error.jsx'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Error/>,
    
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: 'shop',
      element: <Shop />,
      errorElement:<Error/>
    },
    {
      path: 'cart',
      element: <Cart />,
      errorElement:<Error/>
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
