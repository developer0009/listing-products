import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../utils/constants";
import { useParams } from "react-router-dom";
import { array } from "../utils/constants";
import Navbar from "./Navbar";
export default function Data({ row, button, setSelectRow }) {
  const { name } = useParams();
  if (name) row = array(row, name);
  return (
    <>
      <Navbar button={button} />
      {row.length !== 33 && (
        <DataGrid
          rows={row}
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
    </>
  );
}
