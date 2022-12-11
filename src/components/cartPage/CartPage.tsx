import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { heights } from '../../styled/css.vars'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks'
import {
  BackButton,
  CartHeader,
  CartItemWrapper,
  CartSection,
  CartWrapper,
  OrderButton,
  SummaryInfo,
} from './CartPage.styles'
import CartItem from './CartItem'
import { removeCartItem } from '../../store/slices/cartSlice'

const CartPage = () => {
  const navigate = useNavigate()
  const cart = useAppSelector((state) => state.cart)
  const dispatcher = useAppDispatch()
  let summaryPrice: number = 0
  cart.forEach((i) => (summaryPrice += i.price))

  const onDelete = (deleteId: number) => {
    console.log(deleteId)
    dispatcher(removeCartItem(deleteId))
  }
  console.log(cart)
  return (
    <CartWrapper>
      <BackButton
        onClick={() => {
          navigate(-1)
        }}
      >
        {'< back'}
      </BackButton>
      <SummaryInfo>{summaryPrice} ₴</SummaryInfo>
      <CartHeader>CartPage</CartHeader>
      <CartSection>
        {cart.map((i) => (
          <CartItem
            key={i.id}
            name={i.name}
            price={i.price}
            img={i.img}
            id={i.id}
            onClick={onDelete}
          />
        ))}
      </CartSection>
      <OrderButton active={cart.length > 0}>Place order</OrderButton>
    </CartWrapper>
  )
}

export default CartPage
