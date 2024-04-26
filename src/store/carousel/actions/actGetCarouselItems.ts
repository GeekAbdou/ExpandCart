import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { carouselType } from "@/types";

// Async thunk to fetch categories
export const actGetCarouselItems = createAsyncThunk(
  "carousel/actGetCarouselItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<carouselType[]>("/carousel", {
        signal,
      });
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCarouselItems;
