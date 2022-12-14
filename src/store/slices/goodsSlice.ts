import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { initialGoods } from '../initialState'
import api from '../../API/api'
import Services, { GoodsReceived } from '../../API/service'
import { retry } from '@reduxjs/toolkit/query'

const service = new Services()

type AllGoodsObj = {
  goods: GoodsReceived[]
}

export const fetchGoods = createAsyncThunk('goods/fetchAll', async () => {
  return (await service.getGoods()) as GoodsReceived[]
})

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
  },
})

export const {} = goodsSlice.actions

export default goodsSlice.reducer
