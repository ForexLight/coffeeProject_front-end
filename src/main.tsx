import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Login from './components/login'
import { createGlobalStyle } from 'styled-components'
import {Provider} from 'react-redux'
import { store } from './store'

import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
`

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'auth',
    element: <Login />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
