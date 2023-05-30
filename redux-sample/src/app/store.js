import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../slices/usersSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users : userReducer
  },
})