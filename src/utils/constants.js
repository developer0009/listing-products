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
    renderCell: (params) => {
      const { price } = params.row;
      return <span>{`${price + " $" || ""}`} </span>;
    },
  },
  {
    headerName: "Buy Now",
    renderCell: (params) => {
      function myFunction(self, event) {
        console.log("keyup");
        console.log(self.key);
        params.row.quantity = self.key;
      }
      return (
        <div className=" text-dark mx-auto">
          <span
            contenteditable="true"
            className="d-inline-block fs-4 px-3"
            style={{ backgroundColor: "#F3EFE0" }}
            onKeyUp={myFunction}
          >
            {params.row.quantity}
          </span>

          <div
            style={{ fontSize: 18 }}
            className="cart d-inline-block bg-dark px-3 py-1 text-white "
          >
            <i className="fa-solid fa-cart-shopping fs-5"></i>
          </div>
        </div>
      );
    },
    sortable: false,
    wdth: 200,
  },
  {
    field: "",
    ...GRID_CHECKBOX_SELECTION_COL_DEF,
    width: 100,
  },
];
export const array = (row, name) => {
  if (name) row = row.filter((obj) => obj.category == name);
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

export const delRow = (row, setRow, value, setValue, indObj, orgRow) => {
  const handleClick = (id, index) => {
    console.log(id);

    const newArr = row.filter((obj) => obj.id !== id);
    for (let i = 0; i < orgRow.length; i++) {
      if (index === orgRow[i].index) orgRow[i].quantity = 1;
    }
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
              onClick={() => {
                handleClick(params.row.id, params.row.index);
                indObj[params.row.index] = 1;
                params.row.quantity = 1;
                setValue({ ...value, [params.row.index]: 1 });
              }}
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
                  if (params.row.quantity >= 2) {
                    setValue({
                      ...value,
                      [params.row.index]: params.row.quantity - 1,
                    });
                    params.row.quantity -= 1;
                    setValue({
                      ...value,
                      [params.row.index]: params.row.quantity,
                    });
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
                value={params.row.quantity}
              />
              <a
                className="quantity__plus"
                style={{ cursor: "pointer" }}
                onClick={(evt) => {
                  if (params.row.quantity <= 10) {
                    setValue({
                      ...value,
                      [params.row.index]: params.row.quantity + 1,
                    });

                    params.row.quantity += 1;
                    indObj[params.row.index] = params.row.quantity;
                    // indObj[params.row.index] += 1;
                    setValue({
                      ...value,
                      [params.row.index]: params.row.quantity,
                    });
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
export const removeDuplicates = (arr) => {
  const ids = arr.map((o) => o.title);
  const filtered = arr.filter(
    ({ title }, index) => !ids.includes(title, index + 1)
  );
  console.log(filtered);
  return filtered;
};
