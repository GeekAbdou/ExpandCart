import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productResponseType } from "@/types";

// Async thunk to fetch ProductsByCatPrefix
export const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<productResponseType>(
        `/products?cat_prefix=${prefix}`
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

export default actGetProductsByCatPrefix;
