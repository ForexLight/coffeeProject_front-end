import React, { useEffect } from 'react'
import { AdminWrapper, CreateGoodsBtn, CreateUserBtn } from './AdminPage.styles'
import IncomeComponent from './components/IncomeComponent'
import {
  fetchDayOrders,
  fetchMonthOrders,
  fetchWeekOrders,
} from '../../store/slices/ordersSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks'

const AdminPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDayOrders())
    dispatch(fetchWeekOrders())
    dispatch(fetchMonthOrders())
  }, [])

  return (
    <AdminWrapper>
      <IncomeComponent />
      <CreateUserBtn>Create user</CreateUserBtn>
      <CreateGoodsBtn>Create goods</CreateGoodsBtn>
    </AdminWrapper>
  )
}

export default AdminPage
