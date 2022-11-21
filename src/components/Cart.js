import React from "react";
import { col } from "../utils/constants";
import { DataGrid } from "@mui/x-data-grid";
import { Navigate, useNavigate } from "react-router-dom";
const Cart = ({ row }) => {
  const navigate = useNavigate();
  console.log("am in", row);
  let total = 0;
  if (row.length > 0)
    total = row
      .map((obj) => obj.price)
      .reduce((now, next) => {
        return now + next;
      });

  console.log(total);
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
            columns={col}
            hideFooter
            disableSelectionOnClick
            autoHeight
            width={"auto"}
            disableColumnMenu
          />
        </div>
        <div className="offset-1  col-md-3 border  media">
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
