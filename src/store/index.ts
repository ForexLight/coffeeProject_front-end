import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import userRoleReducer  from './slices/userRoleSlice'

const rootReducer = combineReducers({
    user: userReducer,
    role: userRoleReducer
})

export const store = configureStore({
    reducer: rootReducer,
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
