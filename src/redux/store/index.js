import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formBuilderReducer from "../slice/formBuilderSlice";
const rootReducer = combineReducers({
  formBuilder: formBuilderReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
