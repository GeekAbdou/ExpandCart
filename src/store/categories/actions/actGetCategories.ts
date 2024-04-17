import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { categoryResponseType } from "@/types";

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
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("UnExpected Error!");
      }
    }
  }
);

export default actGetCategories;
