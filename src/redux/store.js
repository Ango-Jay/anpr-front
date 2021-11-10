import { configureStore } from "@reduxjs/toolkit";
import CarReducer from "./carSlice";

export default configureStore({
  reducer: {
    car: CarReducer
  }
});
