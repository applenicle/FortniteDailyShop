import { configureStore } from '@reduxjs/toolkit';
import ItemSlice from './Items/slice';

export const store = configureStore({
  reducer: {
    ItemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
