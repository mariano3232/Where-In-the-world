import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App'
import Details from './components/Details';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path:"/details/:name",
    element:<Details/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
