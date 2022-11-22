import React from "react";
import { delRow } from "../utils/constants";
import { DataGrid } from "@mui/x-data-grid";
import { Navigate, useNavigate } from "react-router-dom";
const Cart = ({ row, setRow }) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(1);
  for (let i = 0; i < row.length; i++) {
    if (!row[i]) return <Navigate to={"/"} />;
    else {
      row[i].quantity = value;
    }
  }
  const obj = delRow(row, setRow, value, setValue);
  let total = 0;
  if (row.length > 0 && row[0] != undefined) {
    const arr = row.map((obj) => {
      return { price: obj.price, quantity: obj.quantity };
    });
    for (const val of arr) total += val.quantity * val.price;
  }
  return row.length ? (
    <div style={{ textAlign: "start" }} className="container">
      <button
        className="btn btn-dark border my-3 rounded-pill"
        onClick={() => navigate(-1)}
        style={{ marginRight: "auto" }}
      >
        {" "}
        Go Back
      </button>
      <div className="row">
        <div className="col-md-8">
          <DataGrid
            rows={row}
            // checkboxSelection
            columns={[...obj]}
            hideFooter
            disableSelectionOnClick
            autoHeight
            width={"auto"}
            disableColumnMenu
          />
        </div>
        <div
          className="offset-1  col-md-3 border  media "
          style={{ boxSizing: "border-box" }}
        >
          <ul className="list-group list-group-flush rounded-pill">
            <h4 className="list-group-item pb-4 text-secondary text-center">
              Card Totals
            </h4>

            <li className="list-group-item fs-5 text-center">
              Subtotal :
              <span style={{ color: "rgb(7, 138, 165)", margin: "0 auto" }}>
                {" "}
                <strong> {total} $ </strong>
              </span>
            </li>
            <li className="list-group-item fs-4 text-center">
              Total : <strong className="text-info"> {total} $ </strong>
            </li>
            <li className="btn btn-info rounded-pill">Proceed To Check out</li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};

export default Cart;
