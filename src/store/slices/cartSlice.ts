import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialGoods } from '../initialState'
import { GoodsReceived } from '../../API/service'

export type cartItemWithCount = GoodsReceived & {
  count: number
}

const initialState: cartItemWithCount[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItems: (
      state: cartItemWithCount[],
      action: PayloadAction<GoodsReceived>,
    ) => {
      const isExist = state.find((i) => i.id === action.payload.id)
      if (isExist) {
        isExist.count++
      }
      if (!isExist) {
        state.push({ ...action.payload, count: 1 })
      }
    },
    removeCartItem: (
      state: cartItemWithCount[],
      action: PayloadAction<number>,
    ) => {
      const deleteIndex = state.findIndex((item) => item.id === action.payload)
      console.log(deleteIndex)
      state.splice(deleteIndex, 1)
    },
    clearAllCart: (state: cartItemWithCount[]) => {
      state.length = 0
    },
  },
})

export const { addCartItems, removeCartItem, clearAllCart } = cartSlice.actions

export default cartSlice.reducer
