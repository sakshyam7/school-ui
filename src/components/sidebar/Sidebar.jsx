import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BookIcon from '@mui/icons-material/Book';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ForumIcon from '@mui/icons-material/Forum';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">M E C H I</span>
        </Link>
      </div>
      <hr />
      <div className="center" >
        <ul>
            <Link to='/'style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
            </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Student</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <MenuBookIcon className="icon" />
              <span>Subjects</span>
            </li>
          </Link>
          <Link to='/attendance' style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Attendance</span>
          </li>
          </Link>
          <Link to ='/teacher'style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <span>Teachers</span>
          </li>
          </Link>
          <Link to= '/class' style={{ textDecoration: "none" }}>
          <li>
            <BookIcon className="icon" />
            <span>Class Routine</span>
          </li>
          </Link>
          <Link to='/books'  style={{ textDecoration: "none" }}>
          <li>
            <LocalLibraryIcon className="icon" />
            <span>Library</span>
          </li>
          </Link>
          <Link to='/exam' style={{ textDecoration: "none" }}>
          <li>
            <AssignmentIcon className="icon" />
            <span>Exams</span>
          </li>
          </Link>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Marks and result</span>
          </li>
          <li>
            <AccountBalanceIcon className="icon" />
            <span>Accounting</span>
          </li>
          <Link to='/calendar' style={{ textDecoration: "none" }}>
          <li>
            <CalendarMonthIcon className="icon" />
            <span>Calendar</span>
          </li>
          </Link>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <Link to='/message' style={{ textDecoration: "none" }}>
          <li>
            <ForumIcon className="icon" />
            <span>Message</span>
          </li>
          </Link>
          <Link to='/login' style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
          
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
