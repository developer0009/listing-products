import React, { useEffect, useMemo, useState } from "react";
import { delRow } from "../utils/constants";
import { DataGrid } from "@mui/x-data-grid";
import { Navigate, useNavigate } from "react-router-dom";
const Cart = ({ row, setRow, indObj, orgRow }) => {
  const navigate = useNavigate();
  // const indObj = {};
  // for (let i = 0; i < row.length; i++) {
  //   indObj[i] = 1;
  // }
  const [value, setValue] = React.useState(indObj);
  if (row.length <= 0) return <Navigate to={"/"} />;
  // for (let i = 0; i < row.length; i++) {
  //   row[i].quantity = value[i];
  //   row[i].index = i;
  // }

  for (let i = 0; i < orgRow.length; i++) {
    orgRow[i].quantity = value[i];
    console.log(value[i]);
  }

  console.log("in vart obj", value);
  console.log("in cart rows", orgRow);
  const obj = delRow(row, setRow, value, setValue, indObj);
  // console.log(obj);
  let total = 0;
  if (row.length > 0 && row[0] != undefined) {
    const arr = row.map((obj) => {
      return {
        price: obj.price,
        quantity: obj.quantity,
        subtotal: obj.price * obj.quantity,
      };
    });
    for (const val of arr) total += (val.quantity || 1) * val.price;
  }
  return row.length ? (
    <div style={{ textAlign: "start" }} className="container border">
      <button
        className="btn btn-dark border my-3 rounded-pill"
        onClick={() => navigate(-1)}
        style={{ marginRight: "auto" }}
      >
        {" "}
        Go Back
      </button>
      <div
        style={{
          width: "57%",
          display: "inline-block",
          margin: "0 auto",
          textAlign: "end",
          // border: "2px solid red",
        }}
      >
        <button
          className="btn btn-danger border my-3 rounded-pill "
          onClick={() => setRow([])}
          style={{ display: "inline-block", margin: "auto" }}
        >
          {" "}
          Delete All
        </button>
      </div>
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
            <li className="list-group-item fs-4 text-center ">
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
