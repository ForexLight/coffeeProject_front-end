import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { initialGoods } from '../initialState'
import api from '../../API/api'
import Services, { GoodsReceived, OrderReceived } from '../../API/service'
import { retry } from '@reduxjs/toolkit/query'
import { goodsSlice } from './goodsSlice'

const service = new Services()

type AllOrdersState = {
  orders: OrderReceived[]
  day: OrderReceived[]
  week: OrderReceived[]
  month: OrderReceived[]
}

export const fetchOrders = createAsyncThunk('orders/fetchAll', async () => {
  return (await service.getOrders()) as OrderReceived[]
})
export const fetchDayOrders = createAsyncThunk('orders/fetchDay', async () => {
  return (await service.getDayOrders()) as OrderReceived[]
})
export const fetchWeekOrders = createAsyncThunk(
  'orders/fetchWeek',
  async () => {
    return (await service.getDayOrders()) as OrderReceived[]
  },
)
export const fetchMonthOrders = createAsyncThunk(
  'orders/fetchMonth',
  async () => {
    return (await service.getDayOrders()) as OrderReceived[]
  },
)

const initialState: AllOrdersState = {
  orders: [],
  day: [],
  week: [],
  month: [],
}
export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload
    })
    builder.addCase(fetchDayOrders.fulfilled, (state, action) => {
      state.day = action.payload
    })
    builder.addCase(fetchWeekOrders.fulfilled, (state, action) => {
      state.week = action.payload
    })
    builder.addCase(fetchMonthOrders.fulfilled, (state, action) => {
      state.month = action.payload
    })
  },
})

export const {} = goodsSlice.actions

export default goodsSlice.reducer
