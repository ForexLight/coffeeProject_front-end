import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialGoods } from '../initialState'

export type cartItem = {
  id: number
  price: number
  name: string
  img: string
}

const initialState: cartItem[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItems: (state: cartItem[], action: PayloadAction<cartItem>) => {
      state.push(action.payload)
    },
    removeCartItem: (state: cartItem[], action: PayloadAction<number>) => {
      const deleteIndex = state.findIndex((item) => item.id === action.payload)
      console.log(deleteIndex)
      state.splice(deleteIndex, 1)
    },
    clearAllCart: (state: cartItem[], action: PayloadAction<boolean>) => {
      state.length = 0
    },
  },
})

export const { addCartItems, removeCartItem, clearAllCart } = cartSlice.actions

export default cartSlice.reducer
