import { Login } from '../components/login'
import { WorkerPage } from '../components/workerPage'
import { GoodsPage } from '../components/goodsPage'
import { createBrowserRouter } from 'react-router-dom'
import MainDistributor from './MainDistributor/MainDistributor'
import { CartPage } from '../components/cartPage'
import { Header } from '../components/layout/Header'
import AdminPage from '../components/adminPage/AdminPage'
import UserCreatePage from '../components/userCreatePage/userCreatePage'
import GoodsCreatePage from '../components/goodsCreatePage/goodsCreatePage'

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
        <Login />
      </>
    ),
  },
  {
    path: 'admin',
    element: (
      <>
        <Header />
        <AdminPage />
      </>
    ),
  },
  {
    path: 'admin/users',
    element: (
      <>
        <Header />
        <UserCreatePage />
      </>
    ),
  },
  {
    path: 'admin/goods',
    element: (
      <>
        <Header />
        <GoodsCreatePage />
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
