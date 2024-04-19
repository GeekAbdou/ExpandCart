import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productResponseType } from "@/types";
import { RootState } from "@/store";

// Async thunk to fetch ProductsByCatPrefix
export const actGetProductsByIDs = createAsyncThunk(
  "cart/actGetProductsByIDs",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsID = Object.keys(cart.items);
    if (!itemsID.length) {
      return fulfillWithValue([]);
    }

    try {
      const concatenatedItemsId = itemsID.map((id) => `id=${id}`).join("&");
      const response = await axios.get<productResponseType>(
        `/products?${concatenatedItemsId}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("UnExpected Error!");
      }
    }
  }
);

export default actGetProductsByIDs;
