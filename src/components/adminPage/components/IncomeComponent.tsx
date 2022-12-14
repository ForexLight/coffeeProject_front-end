import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux_hooks'
import OrdersSlice, {
  AllOrdersState,
  fetchDayOrders,
} from '../../../store/slices/ordersSlice'

const IncomeComponentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.changeThemeBtn};
  padding: 5px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ButtonContainer = styled.div<{ active: string }>`
  button:nth-child(${(props) => props.active}) {
    background-color: ${(props) => props.theme.colors.btn};
  }
`
const IncomeData = styled.div`
  margin-top: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.btn};
  border-radius: ${(props) => props.theme.borderRadius};
  h3 {
    margin: 0;
    padding: 20px 0;
    text-align: center;
  }
`

const TimeSelector = styled.button`
  background-color: ${(props) => props.theme.colors.btn};
  color: inherit;
  border: none;
  margin: 0 5px;
  padding: 5px 25px;
  border-radius: ${(props) => props.theme.borderRadius};
`

const IncomeComponent = () => {
  const [timeSelector, setTimeSelector] = useState<string>('1')
  const orders = useAppSelector((state) => state.orders)
  let valueDay = orders.day
    .map((i) => JSON.parse(i.orderItems))[0]
    ?.reduce(
      (
        a: { price: number; count: number },
        b: { price: number; count: number },
      ) => a.price * a.count + b.price * b.count,
    )
  let valueWeek = orders.week
    .map((i) => JSON.parse(i.orderItems))[0]
    ?.reduce(
      (
        a: { price: number; count: number },
        b: { price: number; count: number },
      ) => a.price * a.count + b.price * b.count,
    )
  let valueMonth = orders.month
    .map((i) => JSON.parse(i.orderItems))[0]
    ?.reduce(
      (
        a: { price: number; count: number },
        b: { price: number; count: number },
      ) => a.price * a.count + b.price * b.count,
    )
  const getValue = () => {
    switch (timeSelector) {
      case '1':
        return `Income for today is ${valueDay} ₴`
      case '2':
        return `Income for this week is ${valueWeek} ₴`
      case '3':
        return `Income for this month is ${valueMonth} ₴`
      default:
        return 1
    }
  }

  return (
    <IncomeComponentWrapper>
      <ButtonContainer active={timeSelector}>
        <TimeSelector onClick={() => setTimeSelector('1')}>Day</TimeSelector>

        <TimeSelector onClick={() => setTimeSelector('2')}>Week</TimeSelector>

        <TimeSelector onClick={() => setTimeSelector('3')}>Mount</TimeSelector>
      </ButtonContainer>
      <IncomeData>
        <h3>{getValue()}</h3>
      </IncomeData>
    </IncomeComponentWrapper>
  )
}

export default IncomeComponent
