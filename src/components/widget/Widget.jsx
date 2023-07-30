import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
const Widget = ({ type }) => {
  let data;

  //temporary
  let amount;

  switch (type) {
    case "student":
      data = {
        title: "Student",
        isMoney: false,
        link: "See all Student",
        amount: 900,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "teacher":
      data = {
        title: "Teacher",
        isMoney: false,
        link: "View all teachers",
        amount:39,
        icon: (
          <SchoolIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "employee":
      data = {
        title: "Employee",
        isMoney: true,
        link: "View all employees",
        amount: 12,
        icon: (
          <GroupIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "faculty":
      data = {
        title: "Faculty",
        isMoney: true,
        link: "See details",
        amount:6,
        
        icon: (
          <HomeIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
         {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
