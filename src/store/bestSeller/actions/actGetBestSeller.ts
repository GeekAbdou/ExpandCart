import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productType } from "@/types";
import axiosErrorHandler from "@/utils/axiosErrorHandler";

type TResponse = productType[];

const actGetBestSeller = createAsyncThunk(
  "bestSeller/actGetbestSeller",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkAPI;

    try {
      const bestSeller = await axios.get<{ productId: number }[]>(
        "/bestseller"
      );

      if (!bestSeller.data.length) {
        return fulfillWithValue([]);
      }

      const concatenatedItemsId = bestSeller.data
        .map((el) => `id=${el.productId}`)
        .join("&");

      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`,
        { signal }
      );

      // Return the products data
      return response.data;
    } catch (error) {
      // If an error occurs during the API request, reject with the error message
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetBestSeller;
