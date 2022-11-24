import "./App.css";
import Data from "./components/Data";
import React, { useRef } from "react";
import { useFetch } from "./utils/useFetch";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  const button = useRef();
  const [row] = useFetch();
  const indObj = {};
  const [selectRow, setSelectRow] = React.useState([]);
  for (let i = 0; i < row.length; i++) {
    if (row[i].quantity) {
      indObj[i] = row[i].quantity;
      // row[i].quantity = indObj[i] + 1;
      // row[i].index = i;
    } else {
      indObj[i] = 1;
      row[i].quantity = indObj[i];
      row[i].index = i;
    }
  }
  const [value, setValue] = React.useState(indObj);
  for (let i = 0; i < value.length; i++) {
    row[i].quantity = value[i];
  }
  console.log("in app", indObj);
  console.log("in app.js", value);
  const props = {
    button,
    row,
    setSelectRow,
    selectRow,
    value,
    setValue,
  };

  return (
    <div className="App ">
      <h1 className="text-center text-info">Welcome to Toothsi</h1>
      <Routes>
        <Route path="/" element={<Data {...props} />} />
        <Route path="/:name" element={<Data {...props} />} />
        <Route
          path="/product/cart"
          element={
            <Cart
              row={selectRow}
              setRow={setSelectRow}
              indObj={indObj}
              orgRow={row}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
