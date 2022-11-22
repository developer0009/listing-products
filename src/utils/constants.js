import { resolveBreakpointValues } from "@mui/system/breakpoints";
import { GRID_CHECKBOX_SELECTION_COL_DEF } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import Rating from "./Rating";
export const URL = "https://fakestoreapi.com/products";
export const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
export const columns = [
  {
    field: "image",
    // flex: 1,
    headerName: "Image",
    // headerAlign: "center",
    width: 130,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="product image"
        style={{
          width: "60%",
          height: "50px",
          objectFit: "contain",
        }}
      />
    ),
    sortable: false,
    type: "image",
    height: 100,
  },
  {
    field: "title",
    headerName: "Name",
    width: 230,
    sortable: false,
    renderCell: (params) => (
      <a
        href="https://google.com/"
        style={{ color: "rgb(129, 38, 226)" }}
        className="link"
      >
        {params.value.substring(0, 25)}
      </a>
    ),
  },

  {
    field: "description",
    headerName: "Stock",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: false,
    width: 100,
    renderCell: (params) => (
      <div style={{ color: "#078aa5" }}>
        <i className="fa-solid fa-face-smile"></i> In Stock
      </div>
    ),
  },
  {
    field: "price",
    headerName: "Price",
    sortable: false,
    editable: false,
    valueGetter: (params) => {
      const price = params.row.price;
      return `${price + " $" || ""} ${params.row.lastName || ""}`;
    },
  },
  {
    headerName: "Buy Now",
    renderCell: (params) => (
      <div style={{ margin: "0 auto", fontSize: 30 }} className="cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    ),
    sortable: false,
    wdth: 100,
  },
  {
    field: "",
    ...GRID_CHECKBOX_SELECTION_COL_DEF,
    width: 100,
  },
];
export const array = (row, name) => {
  row = row.filter((obj) => obj.category == name);
  row = row.map((obj, index) => {
    return { ...obj, id: index + 1 };
  });
  return row;
};
export const styles = {
  height: 1000,
  margin: "0 auto",
  marginBottom: "100px",
  marginTop: "30px",
};

export const checkPattern = (row, regeXpattern) => {
  const arr = [];
  for (const value of row) {
    if (value.title.match(regeXpattern) !== null) arr.push(value);
  }
  return arr;
};
const updateRow = (id, row, value) => {
  for (let i = 0; i < row.length; i++) {
    if (row[i].id === id) {
      row[i].quantity = value - 1;
      break;
    }
  }
};
export const delRow = (row, setRow, value, setValue) => {
  const handleClick = (id) => {
    const newArr = row.filter((obj) => obj.id !== id);
    setRow(newArr);
  };
  const obj = [
    {
      field: "image",
      headerName: "Product",
      width: 130,
      renderCell: (params) => (
        <div style={{ margin: 0 }}>
          <div style={{ margin: "0 auto" }} className="text-danger d-inline">
            {" "}
            <i
              className="fa-solid fa-xmark"
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(params.row.id)}
            ></i>
          </div>
          <img
            src={params.value}
            alt="product image"
            style={{
              width: "60%",
              height: "50px",
              objectFit: "contain",
            }}
          />
          <a
            href="https://google.com/"
            style={{ color: "rgb(129, 38, 226)" }}
            className="link"
          >
            {params.row.title.substring(0, 25)}
          </a>
        </div>
      ),
      sortable: false,
      type: "image",
      height: 100,
      width: 370,
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "Stock",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      editable: false,
      width: 100,
      renderCell: () => (
        <div style={{ color: "#078aa5" }}>
          <i className="fa-solid fa-face-smile"></i> In Stock
        </div>
      ),
    },
    {
      headerName: "Subtotal",
      headerAlign: "center",
      renderCell: (params) => {
        let id;
        return (
          <>
            {" "}
            <div className="quantity">
              <a
                style={{ cursor: "pointer" }}
                className="quantity__minus"
                onClick={(evt) => {
                  id = params.row.id;
                  if (value >= 2) {
                    setValue(value - 1);
                    params.row.quantity = value - 1;
                  }
                }}
              >
                <span>-</span>
              </a>
              <input
                name="quantity"
                type="text"
                className="quantity__input quantityCol"
                readOnly
                value={value}
              />
              <a
                className="quantity__plus"
                style={{ cursor: "pointer" }}
                onClick={(evt) => {
                  if (value <= 10) {
                    setValue(value + 1);
                    params.row.quantity = value + 1;
                  }
                }}
              >
                <span>+</span>
              </a>
            </div>
            <div
              className="subtotal border fs-4"
              style={{ marginLeft: "auto" }}
            >
              <span className="priceCol">
                {params.row.price * (params.row.quantity || 1) + " $"}
              </span>
            </div>
          </>
        );
      },

      sortable: false,
      width: 250,
    },
    {
      field: "rating",
      headerName: "Product Rating",
      sortable: false,
      editable: false,
      width: 170,
      renderCell: (params) => {
        return (
          <span className="text-warning fw-semibold">
            {" "}
            <Rating
              rating={params.row.rating.rate}
              total={params.row.rating.count}
            />
          </span>
        );
      },
    },
  ];
  return obj;
};
