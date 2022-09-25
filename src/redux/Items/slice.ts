import { createSlice, createAsyncThunk, isFulfilled } from '@reduxjs/toolkit';
import { fetchItems } from './fetch';

import type { PayloadAction } from '@reduxjs/toolkit';

enum Status {
  ERROR = 'error',
  SUCCESS = 'success',
  LOADING = 'loading',
}

export const initialState = {
  items: [],
  status: Status.LOADING,
  category: categories[],
};

export const ItemSlice = createSlice({
  name: 'Item',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems,setCategory } = ItemSlice.actions;

export default ItemSlice.reducer;
