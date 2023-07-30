import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'



//rotas

import Shelf from './routes/shelf'
import Cart from "./routes/cart"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Shelf/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
