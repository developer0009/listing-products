import "./App.css";
import Data from "./components/Data";
import React, { useRef } from "react";
import { useFetch } from "./utils/useFetch";

import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  const button = useRef();
  const [row] = useFetch();
  const [selectRow, setSelectRow] = React.useState([]);
  const props = { button, row, setSelectRow };
  return (
    <div className="App">
      <h1 className="text-center text-info">Welcome to Toothsi</h1>
      <Routes>
        <Route path="/" element={<Data {...props} />} />
        <Route path="/:name" element={<Data {...props} />} />
        <Route path="/product/cart" element={<Cart row={selectRow} />} />
      </Routes>
    </div>
  );
}
export default App;
