import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import todoSlice from './features/todo/slice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoSlice,
    },
})