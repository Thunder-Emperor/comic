import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import './index.css'


import Details from './Pages/details'
import Home from './Pages/Home'
import Cart from './Pages/cart'
import { CartProvider } from 'react-use-cart'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>,
    },
    {
      path: 'comics/:comicName',
      element:<Details />,  
    },
    {
      path:'/cart',
      element:<Cart/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CartProvider>
   <RouterProvider  router={router}/>
  </CartProvider>
  </React.StrictMode>
)
