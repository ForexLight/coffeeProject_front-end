import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Login from './components/login'
import { createGlobalStyle } from 'styled-components'

import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  
  ${normalize}
`

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <App />
        <Link to="about">About</Link>
      </div>
    ),
  },
  {
    path: 'auth',
    element: <Login />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
