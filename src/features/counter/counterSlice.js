import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value -= 1;
    },
    amountAdded(state, action) {
      state.value += action.payload;
    },
    amountReduced(state, action) {
      state.value -= action.payload;
    },
    clearAll(state) {
      state.value = 0;
    },
  },
});

export const {
  incremented,
  decremented,
  amountAdded,
  amountReduced,
  clearAll,
} = counterSlice.actions;
export default counterSlice.reducer;
