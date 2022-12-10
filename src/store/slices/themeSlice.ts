import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Theme = {
  dark: boolean
}

const initialState: Theme = {
  dark: localStorage.getItem('isDarkTheme') === 'true',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state: Theme, action: PayloadAction<boolean>) => {
      state.dark = action.payload
    },
  },
})

export const { updateTheme } = themeSlice.actions

export default themeSlice.reducer
