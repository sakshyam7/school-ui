import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    

    {
      id: 1143155,
      name: "Anusha Gurung",
      img: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
      course: "Bsc. Csit",
      semester: "Eight",
      batch: 2075,
      fees: "Rs 45K",
      due: "03/16/2023",
    },
    {
      id: 1133159,
      name: "Bishal Karki",
      img: "https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&w=600",
      course: "Bsc. Csit",
      semester: "Eight",
      batch: 2075,
      fees: "Rs 45K",
      due: "03/16/2023",
    },
    {
      id: 1123455,
      name: "Ningma Limbu",
      img: "https://images.pexels.com/photos/879474/pexels-photo-879474.jpeg?auto=compress&cs=tinysrgb&w=600",
      course: "Bsc",
      semester: "fourth",
      batch: 2077,
      fees: "Rs 25K",
      due: "04/16/2023",
    },
    {
      id: 1143262,
      name: "Abhisek Parajuli",
      img: "https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&w=600",
      course: "Bsc. Csit",
      semester: "Eight",
      batch: 2075,
      fees: "Rs 45K",
      due: "03/16/2023",
    },
    {
      id: 1143157,
      name: "Arpana Sitaula",
      img: "https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=600",
      course: "Bsc. Csit",
      semester: "Eight",
      batch: 2075,
      fees: "Rs 45K",
      due: "03/16/2023",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Course</TableCell>
            <TableCell className="tableCell">Semester</TableCell>
            <TableCell className="tableCell">Batch</TableCell>
            <TableCell className="tableCell">Fees</TableCell>
            <TableCell className="tableCell">Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.course}</TableCell>
              <TableCell className="tableCell">{row.semester}</TableCell>
              <TableCell className="tableCell">{row.batch}</TableCell>
              <TableCell className="tableCell">{row.fees}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.due}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
