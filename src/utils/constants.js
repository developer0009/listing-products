import { GRID_CHECKBOX_SELECTION_COL_DEF } from "@mui/x-data-grid";

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

  // { field: "category", headerName: "Category", width: 130, sortable: false },,
  {
    field: "description",
    headerName: "Stock",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: false,
    width: 100,
    // valueGetter: (params) =>
    //   `${params.row.description || ""} ${params.row.lastName || ""}`,
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
    valueGetter: (params) =>
      `${params.row.price + " $" || ""} ${params.row.lastName || ""}`,
  },

  {
    headerName: "Buy Now",
    renderCell: (params) => (
      <div style={{ margin: "0 auto", fontSize: 30 }} className="cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    ),
  },
  {
    field: "",
    ...GRID_CHECKBOX_SELECTION_COL_DEF,
    width: 100,
    // renderCell: (params) => <span>H</span>,
  },
];
export const array = (row, name) => {
  return row.filter((obj) => obj.category == name);
};
export const styles = {
  height: 1000,
  width: "55%",
  margin: "0 auto",
  marginBottom: "100px",
  marginTop: "30px",
};
