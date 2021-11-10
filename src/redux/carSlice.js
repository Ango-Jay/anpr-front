import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let baseURL = "";
export const getCarInfoAsync = createAsyncThunk(
  "car/getCarInfo",
  axios
    .get(baseURL)
    .then((res) => {
      let carInfo = res.data;
      return carInfo;
    })
    .catch((err) => {
      throw err;
    })
);
/*export const deleteCarInfoAsync = createAsyncThunk(
  "car/deleteCarInfo",
  axios
    .delete(baseURL/id)
    .then(() => {
      console.log("car info deleted");
    })
    .catch((err) => {
      throw err;
    })
);*/

export const carSlice = createSlice({
  name: "car",
  initialState: {
    plateCharacters: "",
    plateImage: "",
    carFeatures: {}
  },
  reducers: {
    [getCarInfoAsync.fulfilled]: (state, action) => {
      return action.payload.carInfo;
    }
  }
});

//export const { getCarInfoAsync } = carSlice.actions;
export default carSlice.reducer;
