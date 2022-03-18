import { configureStore } from '@reduxjs/toolkit';
import startReducer from './slices/startSlice';
import loadReducer from './slices/questionSlice';
import countReducer from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    start: startReducer,
    load: loadReducer,
    counter: countReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;