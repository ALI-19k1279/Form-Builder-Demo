import { createSlice } from "@reduxjs/toolkit";

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState: {},
  reducers: {
    createFormBuilderSchema: (state, action) => {
      state = action.payload;
    },
  },
});

export const { createFormBuilderSchema } = formBuilderSlice.actions;
export default formBuilderSlice.reducer;
