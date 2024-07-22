import { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = process.env.REACT_APP_PF

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
      <a href="https://www.facebook.com/ahmad.dekmak.5" target="_blank" rel="noopener noreferrer">
        <i className="topIcon fa-brands fa-square-facebook"></i>
      </a>
      <a href="https://linkedin.com/in/ahmad-dekmak" target="_blank" rel="noopener noreferrer">
        <i className="topIcon fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/dkahmad95" target="_blank" rel="noopener noreferrer">
        <i className="topIcon fa-brands fa-square-github"></i>
      </a>
      <a href="https://www.instagram.com/ahmad.ali.dekmak/" target="_blank" rel="noopener noreferrer">
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/about"}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/contact"}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"write"}>
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to={"login"}>
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/register"}>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopBar;
