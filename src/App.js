import "./App.css";
import Data from "./components/Data";
import React, { useRef } from "react";
import { useFetch } from "./utils/useFetch";
import { styles } from "./utils/constants";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  const button = useRef();
  const [row] = useFetch();
  const [selectRow, setSelectRow] = React.useState([]);
  const props = { button, row, setSelectRow };
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Hello World</h1>
      <div style={styles}>
        <Routes>
          <Route path="/" element={<Data {...props} />} />
          <Route path="/:name" element={<Data {...props} />} />
          <Route path="/product/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
