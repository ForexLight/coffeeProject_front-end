import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom'
import Login from "./components/login";
import {createGlobalStyle} from "styled-components";

import font1 from './__fonts/OpenSans-VariableFont_wdth,wght.ttf'
import font2 from './__fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  
  ${normalize}
`

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
            <App />
            <Link to='about'>About</Link>
        </div>
    },
    {
        path: 'auth',
        element: <Login />
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
