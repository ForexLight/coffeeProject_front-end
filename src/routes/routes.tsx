import { Login } from '../components/login'
import { WorkerPage } from '../components/workerPage'
import { GoodsPage } from '../components/goodsPage'
import App from '../App'
import { createBrowserRouter, redirect } from 'react-router-dom'
import MainDistributor from './MainDistributor/MainDistributor'
import { useAppSelector } from '../hooks/redux_hooks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainDistributor />,
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
    element: <GoodsPage />,
  },
])
export default router
