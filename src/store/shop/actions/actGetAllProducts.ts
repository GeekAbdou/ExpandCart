import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { productType } from "@/types";

// Async thunk to fetch All Products
export const actGetAllProducts = createAsyncThunk(
  "shop/actGetAllProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<productType[]>("/products", {
        signal,
      });
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetAllProducts;
