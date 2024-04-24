import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: "",
  template: "",
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLayout: (state, action) => {
      state.template = "";
      state.layout = action.payload;
    },
    setTemplate: (state, action) => {
      state.template = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setLayout, setTemplate } = mainSlice.actions;
export default mainSlice.reducer;
