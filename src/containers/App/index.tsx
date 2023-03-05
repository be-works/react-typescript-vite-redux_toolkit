import Counter from "src/containers/Counter";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Counter/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
