import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialGoods } from '../initialState'

type Goods = {
  id: number
  name: string
  price: number
  img: string
}
type AllGoodsObj = {
  bakery: Goods[]
  coffee: Goods[]
  dessert: Goods[]
  drinks: Goods[]
}

const initialState: AllGoodsObj = initialGoods
export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
})

export const {} = goodsSlice.actions

export default goodsSlice.reducer

export type { Goods }
