import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { categoryResponseType } from "@/types";
import axiosErrorHandler from "@/utils/axiosErrorHandler";

// Async thunk to fetch categories
export const actGetCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<categoryResponseType>("/categories");
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCategories;
