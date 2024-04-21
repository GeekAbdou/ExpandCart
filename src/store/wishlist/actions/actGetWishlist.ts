import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productType } from "@/types";
import axiosErrorHandler from "@/utils/axiosErrorHandler";

type TResponse = productType[];

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkAPI;

    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        "/wishlist?userId=1"
      );

      if (!userWishlist.data.length) {
        return fulfillWithValue([]);
      }

      const concatenatedItemsId = userWishlist.data
        .map((el) => `id=${el.productId}`)
        .join("&");

      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`,
        { signal }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlist;
