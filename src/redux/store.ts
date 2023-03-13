import { Action, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";
import appSlice from "src/containers/App/appSlice";
import counterSlice from "src/containers/Counter/counterSlice";

const rootReducer = combineReducers({
  app: appSlice,
  counter: counterSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
