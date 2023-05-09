import { configureStore } from "@reduxjs/toolkit";
import formBuilderReducer from "../slice/formBuilderSlice";
export const store = configureStore({
  reducer: {
    formBuilder: formBuilderReducer,
  },
});
