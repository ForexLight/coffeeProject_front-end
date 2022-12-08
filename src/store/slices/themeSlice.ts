import {createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Theme = {
    dark: boolean
}

const initialState: Theme = {dark: false}


export const themeSlice = createSlice({
    name: 'userRole',
    initialState,
    reducers: {
        updateTheme: (state: Theme, action: PayloadAction<boolean>) => {
            state.dark = action.payload
        }
    },
})

export const { updateTheme } = themeSlice.actions

export default themeSlice.reducer
