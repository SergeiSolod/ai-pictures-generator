import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "./MainApi";
import { setImage, setImages, setLoading, setError } from "./MainSlice";

export const fetchImg = createAsyncThunk("fetchImg", async (data, thunkAPI) => {
  try {
    thunkAPI.dispatch(setLoading(true));
    const response = await mainApi.getImage(data);
    thunkAPI.dispatch(setImage(response?.data?.img));
    let images = [...thunkAPI?.getState()?.main?.images];
    images.unshift(response?.data?.img);
    thunkAPI.dispatch(setImages(images));
    thunkAPI.dispatch(setLoading(false));
  } catch (e: any) {
    thunkAPI.dispatch(setLoading(false));
    thunkAPI.dispatch(setError("Sorry, there was an error, please try again"));
  }
});
