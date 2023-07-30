import React from 'react'
import './MyClassTable.scss'
import { DataGrid } from "@mui/x-data-grid";
import { classColumns, classRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyClassTable = () => {
  const [data, setData] = useState(classRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Class
        <Link to="/class/new" className="link">
          Add Class
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={classColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default MyClassTable
