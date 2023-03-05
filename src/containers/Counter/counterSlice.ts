import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    resetCounter() {
      return initialState;
    },
    increase(state: CounterState) {
      state.count = state.count + 1;
    },
  },
});

export const { resetCounter, increase } = counterSlice.actions;

export default counterSlice.reducer;
