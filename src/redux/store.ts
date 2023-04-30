import { configureStore } from '@reduxjs/toolkit';
import tipReducer from './tipSlice';

export const store = configureStore({
  reducer: {
    tipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
