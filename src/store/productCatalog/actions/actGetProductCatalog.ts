import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productType } from "@/types";
import axiosErrorHandler from "@/utils/axiosErrorHandler";

type TResponse = productType[];

const actGetProductCatalog = createAsyncThunk(
  "productCatalog/actGetProductCatalog",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    try {
      const productCatalog = await axios.get<{ productId: number }[]>(
        "/productCatalog"
      );

      if (!productCatalog.data.length) {
        return fulfillWithValue([]);
      }

      const concatenatedItemsId = productCatalog.data
        .map((el) => `id=${el.productId}`)
        .join("&");

      console.log(`/products?${concatenatedItemsId}`);
      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductCatalog;
