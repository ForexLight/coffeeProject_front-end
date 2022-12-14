import React, { useEffect } from 'react'
import { AdminWrapper } from './AdminPage.styles'
import IncomeComponent from './components/IncomeComponent'
import {
  fetchDayOrders,
  fetchMonthOrders,
  fetchWeekOrders,
} from '../../store/slices/ordersSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks'
import { stat } from 'fs'

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
    </AdminWrapper>
  )
}

export default AdminPage
