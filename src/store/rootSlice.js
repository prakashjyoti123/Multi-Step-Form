import { createSlice } from "@reduxjs/toolkit";

// Slice
const rootSlice = createSlice({
  name: "root",

  initialState: {
    FormStage: 1, // default page stage to show on page load
    FormUserSignup: "",
    SecondPage: "",
    ThirdPage: "",
  },

  reducers: {
    formStage: (state, action) => {
      state.FormStage = action.payload;
    },
    formSignup: (state, action) => {
      state.FormUserSignup = action.payload;
    },
    secondPage: (state, action) => {
      state.SecondPage = action.payload;
    },
    thirdPage: (state, action) => {
      state.ThirdPage = action.payload;
    },
  },
});

// Actions
export const { formStage, secondPage, formSignup, thirdPage } =
  rootSlice.actions;
export const reducer = rootSlice.reducer;
