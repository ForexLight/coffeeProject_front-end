import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { initialGoods } from '../initialState'
import api from '../../API/api'
import Services, {
  GoodsReceived,
  UserData,
  UserDetails,
} from '../../API/service'
import { retry } from '@reduxjs/toolkit/query'

const service = new Services()

type AllGoodsObj = {
  users: UserData[]
}

export const fetchAllUsers = createAsyncThunk('allUsers/fetchAll', async () => {
  return (await service.getUsers()).sort((a, b) => a.id - b.id) as UserData[]
})
export const createUser = createAsyncThunk(
  'allUsers/createOne',
  async (data: UserDetails) => {
    return (await service.registration(data)) as UserData
  },
)
export const removeUser = createAsyncThunk(
  'allUsers/deleteOne',
  async (id: number) => {
    await service.deleteUsers(id)
    return id
  },
)

const initialState: AllGoodsObj = {
  users: [],
}
export const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users.push(action.payload)
    })
    builder.addCase(removeUser.fulfilled, (state, action) => {
      console.log(state.users.filter((i) => i.id !== action.payload))
      state.users = state.users.filter((i) => i.id !== action.payload)
    })
  },
})

export const {} = allUsersSlice.actions

export default allUsersSlice.reducer
