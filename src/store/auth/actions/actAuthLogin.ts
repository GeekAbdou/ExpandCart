import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { loginFormDataType, loginResponseType } from "@/types";

const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData: loginFormDataType, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.post<loginResponseType>("/login", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthLogin;
