import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, styles, array } from "../utils/constants";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
export default function Data({ row, button, setSelectRow }) {
  const { name } = useParams();
  if (name) {
    row = array(row, name);
    console.log("am in data 2nd one i ran??", row);
    // console.log();
  }
  const [searchRow, setSearchRow] = React.useState([]);
  const props = {
    setSearchRow,
    button,
    row,
  };
  return (
    <>
      <div style={styles} id="data">
        <Navbar {...props} />
        {row.length !== 33 && (
          <DataGrid
            rows={searchRow.length ? searchRow : row}
            checkboxSelection
            columns={[...columns]}
            hideFooter
            autoHeight
            disableColumnMenu
            disableSelectionOnClick
            onSelectionModelChange={(id) => {
              const obj = id.map((num) => row[num - 1]);
              setSelectRow(obj);
              if (obj.length > 0) button.current.disabled = false;
              else button.current.disabled = true;
            }}
          />
        )}
      </div>
    </>
  );
}
