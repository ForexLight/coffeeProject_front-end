import {createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { roles } from '../initialState'
import { Role } from './types/types'


const initialState: Role[] = roles


export const userRoleSlice = createSlice({
    name: 'userRole',
    initialState,
    reducers: {
        updateUserRole: (state: Role[], action: PayloadAction<Role[]>) => {
            state.push(...action.payload)
        }
    },
})

export const { updateUserRole } = userRoleSlice.actions

export default userRoleSlice.reducer
