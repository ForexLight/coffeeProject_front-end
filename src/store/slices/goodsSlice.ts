import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { initialGoods } from '../initialState'
import api from '../../API/api'
import Services, { GoodsReceived } from '../../API/service'
import { retry } from '@reduxjs/toolkit/query'
import { stat } from 'fs'

const service = new Services()

type AllGoodsObj = {
  goods: GoodsReceived[]
}

export const fetchGoods = createAsyncThunk('goods/fetchAll', async () => {
  return (await service.getGoods()) as GoodsReceived[]
})
export const addGoods = createAsyncThunk(
  'goods/addOne',
  async (data: FormData) => {
    return (await service.addGoods(data)) as GoodsReceived
  },
)

export const deleteGoods = createAsyncThunk(
  'goods/deleteOne',
  async (id: number) => {
    await service.deleteGoods(id)
    return id
  },
)

const initialState: AllGoodsObj = {
  goods: [],
}
export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.goods = action.payload
    })
    builder.addCase(addGoods.fulfilled, (state, action) => {
      state.goods.push(action.payload)
    })
    builder.addCase(deleteGoods.fulfilled, (state, action) => {
      state.goods = state.goods.filter((i) => i.id !== action.payload)
    })
  },
})

export const {} = goodsSlice.actions

export default goodsSlice.reducer
