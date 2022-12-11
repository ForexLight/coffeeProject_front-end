import { Login } from '../components/login'
import { WorkerPage } from '../components/workerPage'
import { GoodsPage } from '../components/goodsPage'
import App from '../App'
import { createBrowserRouter, redirect } from 'react-router-dom'
import MainDistributor from './MainDistributor/MainDistributor'
import { useAppSelector } from '../hooks/redux_hooks'
import { CartPage } from '../components/cartPage'
import { Header } from '../components/layout/Header'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainDistributor />,
  },
  {
    path: 'auth',
    element: (
      <>
        <Header />
        <WorkerPage />
      </>
    ),
  },
  {
    path: 'worker',
    element: (
      <>
        <Header />
        <WorkerPage />
      </>
    ),
  },
  {
    path: 'worker/:value',
    element: (
      <>
        <Header />
        <GoodsPage />
      </>
    ),
  },
  {
    path: 'worker/cart',
    element: (
      <>
        <Header />
        <CartPage />
      </>
    ),
  },
])
export default router
