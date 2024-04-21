import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productResponseType } from "@/types";
import axiosErrorHandler from "@/utils/axiosErrorHandler";

// Async thunk to fetch ProductsByCatPrefix
export const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<productResponseType>(
        `/products?cat_prefix=${prefix}`,
        { signal }
      );
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsByCatPrefix;
