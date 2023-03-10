import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import userRoleReducer from './slices/userRoleSlice'
import themeReducer from './slices/themeSlice'
import categoryReducer from './slices/categorySlice'
import goodsReducer from './slices/goodsSlice'
import authReducer from './slices/authSlice'
import cartReducer from './slices/cartSlice'
import orderReducer from './slices/ordersSlice'
import allUsersReducer from './slices/allUsersSlice'

const rootReducer = combineReducers({
  user: userReducer,
  role: userRoleReducer,
  theme: themeReducer,
  category: categoryReducer,
  goods: goodsReducer,
  auth: authReducer,
  cart: cartReducer,
  orders: orderReducer,
  users: allUsersReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
