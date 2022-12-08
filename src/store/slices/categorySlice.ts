import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Category = {
  name: string
  id: number
}

const initialState: Category[] = [
  {
    name: 'dessert',
    id: 0,
  },
  {
    name: 'bakery',
    id: 1,
  },
  {
    name: 'drinks',
    id: 2,
  },
  {
    name: 'coffee',
    id: 3,
  },
]

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state: Category[], action: PayloadAction<Category>) => {
      state.push(action.payload)
    },
  },
})

export const { addCategory } = categorySlice.actions

export default categorySlice.reducer
