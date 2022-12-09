import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Auth = {
  isAuth: boolean
}

const initialState: Auth = {
  isAuth: !!localStorage.getItem('token'),
}

export const authSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateStatus: (state: Auth, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
})

export const { updateStatus } = authSlice.actions

export default authSlice.reducer
