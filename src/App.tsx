import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { darkTheme, myTheme } from './styled/themes'
import normalize from 'styled-normalize'

import React from 'react'
import { useAppSelector } from './hooks/redux_hooks'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Login } from './components/login'
import { Header } from './components/layout/Header'
import { router } from './routes'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    transition: background 0.4s;
    font-family: 'Open Sans',sans-serif;
  }
`

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
