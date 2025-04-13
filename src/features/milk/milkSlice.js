import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfMilk: 20,
};

const milkSlice = createSlice({
  name: "milk",
  initialState,
  reducers: {
    buyMilk: (state, action) => {
      state.numOfMilk = state.numOfMilk - 1;
    },
  },
});
export const {buyMilk} = milkSlice.actions
export default milkSlice.reducer
