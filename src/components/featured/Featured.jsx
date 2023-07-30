import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Fees Collection & Expenses</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={60} text={"60%"} strokeWidth={5} />
        </div>
        <p className="title">Total Earnings</p>
        <p className="amount">Rs 30 Lakh</p>
        <p className="desc">
          Collections Fees  Expenses
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Collections</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">Rs 10 Lakh</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Fees</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">Rs 8 Lakh</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Expenses</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">Rs 5 Lakh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
