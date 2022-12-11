import React from 'react'
import { cartItem } from '../../store/slices/cartSlice'
import {
  CartData,
  CartImg,
  CartItemWrapper,
  RemoveButton,
} from './CartPage.styles'

type CartItemComponent = cartItem & {
  onClick: (removeId: number) => void
}

const CartItem = ({ id, name, price, img, onClick }: CartItemComponent) => {
  return (
    <CartItemWrapper>
      <CartImg img={img} />
      <CartData>
        <h3>name</h3>
        <span>{price} ₴</span>
      </CartData>
      <RemoveButton onClick={() => onClick(id)}>remove</RemoveButton>
    </CartItemWrapper>
  )
}

export default CartItem
