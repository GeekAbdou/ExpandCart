import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { categoryType } from "@/types";

// Async thunk to fetch categories
export const actGetCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<categoryType[]>("/categories", {
        signal,
      });
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCategories;
