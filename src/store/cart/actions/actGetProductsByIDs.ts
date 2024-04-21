import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productResponseType } from "@/types";
import { RootState } from "@/store";
import axiosErrorHandler from "@/utils/axiosErrorHandler";

// Async thunk to fetch ProductsByCatPrefix
export const actGetProductsByIDs = createAsyncThunk(
  "cart/actGetProductsByIDs",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsID = Object.keys(cart.items);
    const concatenatedItemsId = itemsID.map((id) => `id=${id}`).join("&");

    if (!itemsID.length) {
      // if there is no items in the cart return empty ID array
      return fulfillWithValue([]);
    }

    try {
      const response = await axios.get<productResponseType>(
        `/products?${concatenatedItemsId}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsByIDs;
