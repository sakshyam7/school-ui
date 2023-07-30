import React from 'react'
import './BookTable.scss'
import { DataGrid } from "@mui/x-data-grid";
import { bookColumns, bookRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const BookTable = () => {
  const [data, setData] = useState(bookRows);

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
        Add New Book
        <Link to="/books/new" className="link">
          Add Book
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={bookColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default BookTable
