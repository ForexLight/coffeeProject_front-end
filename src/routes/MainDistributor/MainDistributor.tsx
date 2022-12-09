import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux_hooks'

const MainDistributor = () => {
  const roles = useAppSelector((state) => state.role)
  const isAuth = useAppSelector((state) => state.auth.isAuth)

  const navigateTo =
    roles.map((i) => i.value === 'USER').length !== 0 ? 'worker' : 'admin'
  return <>{isAuth ? <Navigate to={navigateTo} /> : <Navigate to={'auth'} />}</>
}

export default MainDistributor
