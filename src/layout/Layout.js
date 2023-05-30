import { Outlet } from "react-router-dom";
import "../Dashboard/Dashboard.css";
import TopNavbar from "../AllNavbar/TopNavbar";
import LeftSideNavbar from "../AllNavbar/LeftSideNavbar";
import RigtSideNavbar from "../AllNavbar/RightSideNavbar";

const Layout = () => {
  return (
    <>
      <TopNavbar />
      <div class="container">
        <LeftSideNavbar />
        <Outlet />
        <RigtSideNavbar />

        
      </div>
      <div class="footer">
        <p>Copyright 2023-UIIT</p>
      </div>
    </>
  );
};
export default Layout;
