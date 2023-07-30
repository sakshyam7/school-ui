import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <p className="para">welcome, Anu</p>
          </div>
          <div className="item">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
