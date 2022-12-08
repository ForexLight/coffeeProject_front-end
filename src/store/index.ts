import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import userRoleReducer from './slices/userRoleSlice'
import themeReducer from './slices/themeSlice'
import categoryReducer from './slices/categorySlice'
import goodsReducer from './slices/goodsSlice'

const rootReducer = combineReducers({
  user: userReducer,
  role: userRoleReducer,
  theme: themeReducer,
  category: categoryReducer,
  goods: goodsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
