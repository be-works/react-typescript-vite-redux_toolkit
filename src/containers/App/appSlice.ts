import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
  loading: boolean;
  //   profile: User;
};

const initialState: AppState = {
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    updateLoading(state: AppState, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
  },
});

export const { updateLoading } = appSlice.actions;

export default appSlice.reducer;
