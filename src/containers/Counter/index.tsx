// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import reactLogo from "src/assets/images/react.svg";
import { Styles } from "./styles";
import { increase } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { updateLoading } from "../App/appSlice";
import { DefaultSelect } from "src/components/Input/Select";

interface ICounter {}

function Counter(props: ICounter) {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <Styles className="App">
      <DefaultSelect/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increase());
            dispatch(updateLoading(true));
          }}
        >
          count is {count}
        </button>
      </div>
    </Styles>
  );
}

export default Counter;
