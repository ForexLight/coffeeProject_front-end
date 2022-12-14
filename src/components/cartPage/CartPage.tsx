import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks'
import {
  BackButton,
  CartHeader,
  CartSection,
  CartWrapper,
  OrderButton,
  SummaryInfo,
} from './CartPage.styles'
import CartItem from './components/CartItem'
import { clearAllCart, removeCartItem } from '../../store/slices/cartSlice'
import Services from '../../API/service'

const CartPage = () => {
  const navigate = useNavigate()
  const cart = useAppSelector((state) => state.cart)
  const dispatcher = useAppDispatch()
  let summaryPrice: number = 0
  const service = new Services()
  cart.forEach((i) => (summaryPrice += i.price * i.count))

  localStorage.setItem('cart', JSON.stringify(cart))

  const onDelete = (deleteId: number) => {
    dispatcher(removeCartItem(deleteId))
  }

  const onCreateOrder = async () => {
    await service.postOrder({ orderItems: JSON.stringify(cart) })
    dispatcher(clearAllCart())
  }
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
            createdAt={i.createdAt}
            updatedAt={i.updatedAt}
            category={i.category}
            onClick={onDelete}
            count={i.count}
          />
        ))}
      </CartSection>
      <OrderButton active={cart.length > 0} onClick={onCreateOrder}>
        Place order
      </OrderButton>
    </CartWrapper>
  )
}

export default CartPage
