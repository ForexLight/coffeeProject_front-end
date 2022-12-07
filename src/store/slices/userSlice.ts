import {createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { userData } from '../initialState'
import { UserState } from './types'


const initialState: UserState[] = userData


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state: UserState[], action: PayloadAction<UserState>) => {
            console.log(action.payload)
            state[0] = action.payload
        }
    },
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer
