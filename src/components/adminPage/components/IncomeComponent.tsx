import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../../hooks/redux_hooks'

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
  let valueDay = orders.day.map((i) => JSON.parse(i.orderItems)).flat()

  let valueWeek = orders.week.map((i) => JSON.parse(i.orderItems)).flat()

  let valueMonth = orders.month.map((i) => JSON.parse(i.orderItems)).flat()

  const getValue = () => {
    switch (timeSelector) {
      case '1': {
        let sum: number = 0
        valueDay.forEach((i) => {
          console.log(parseInt(i.price) * i.count)
          sum = sum + i.price * i.count
        })
        return `Income for today is ${sum} ₴`
      }
      case '2': {
        let sum: number = 0
        valueWeek.forEach((i) => {
          console.log(parseInt(i.price) * i.count)
          sum = sum + i.price * i.count
        })
        return `Income for this week is ${sum} ₴`
      }
      case '3': {
        let sum: number = 0
        valueMonth.forEach((i) => {
          console.log(parseInt(i.price) * i.count)
          sum = sum + i.price * i.count
        })

        return `Income for this month is ${sum} ₴`
      }

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
        <h3>{String(getValue())}</h3>
      </IncomeData>
    </IncomeComponentWrapper>
  )
}

export default IncomeComponent
