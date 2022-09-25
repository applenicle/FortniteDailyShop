import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk<any, any>('items/fetchByCategory', async (params) => {
  // const { categories, search } = params;
  const { data } = await axios.get<any>(`https://fortniteapi.io/v2/shop?lang=en`, {
    headers: {
      Authorization: 'efde080f-bd5a76b7-d5e7cd41-33351c1e',
    },
  });
  console.log(data.shop);
  return data.shop;
});
