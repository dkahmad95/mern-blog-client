import "./sidebar.css";
import image0 from "../../aboutMeImage/image0.jpg";


const SideBar = () => {
 

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={image0} alt="" />
        <p>
          Hello! I'm Ahmad Dekmak, a software developer passionate about
          creating innovative and efficient solutions. I have a strong
          background in software development, with experience in multiple
          programming languages and frameworks.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
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
      </div>
    </div>
  );
};

export default SideBar;
