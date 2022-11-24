import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, styles, array, removeDuplicates } from "../utils/constants";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
export default function Data({ row, button, setSelectRow, selectRow }) {
  const { name } = useParams();

  const [searchRow, setSearchRow] = React.useState([]);
  if (name) {
    row = array(row, name);
    console.log("am in data 2nd one i ran??", row);
  }
  // const [searchRow, setSearchRow] = React.useState([]);

  const props = {
    setSearchRow,
    button,
    row,
    selectRow,
    // value,
    // setValue,
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
              const finalArray = removeDuplicates(
                array([...selectRow, ...obj])
              );
              console.log(finalArray);
              setSelectRow(finalArray);
              if (obj.length > 0) button.current.disabled = false;
              else button.current.disabled = true;
            }}
          />
        )}
      </div>
    </>
  );
}
