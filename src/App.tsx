import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React from 'react'
import { useAppSelector } from './hooks/redux_hooks'
import { darkTheme, myTheme } from './styled/themes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import normalize from 'styled-normalize'
import Login from './components/login'
import Header from './components/layout/Header/Header'
import WorkerPage from './components/workerPage/WorkerPage'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    transition: background 0.4s;
    font-family: 'Open Sans',sans-serif;
  }
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
  {
    path: 'worker',
    element: <WorkerPage />,
  },
  {
    path: 'worker/:value',
    element: <div>worker value</div>,
  },
])

function App() {
  const isDarkTheme = useAppSelector((state) => state.theme.dark)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : myTheme}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
