import searchPnG from "../Images/search.png";
import homeButton from "../Images/home-button.png";
import iconPng from "../Images/notification icon.png";
import messegePng from "../Images/message 1.png";
import settingPng from "../Images/settings (1).png";
import profilePng from "../Images/profile-pic.png";

import SettingMenu from "../DropDownMenu/SettingMenu";
import { Link } from "react-router-dom";
import { useState } from "react";



const TopNavbar = () => {
const userProfile=localStorage.getItem("userProfile")


    const [open,setOpen]=useState(false);
 const toggleMenu=()=>{
 setOpen(!open)
 }
    return ( 
        <>
         <nav className="top-navbar">

         <h1 className="navbar-logo">✧Talksians</h1>
    
    <div className="nav-left">
      <div className="search-box">
        <img src={searchPnG} />
        <input type="text" placeholder="Search" />
      </div>
      <ul id="home">
        <Link to="/dashboard">
        <li><img src={homeButton} /></li>
        </Link>
      </ul>
    </div>
    <div className="nav-right">
            <ul>
              <li>
                <img
                  src={iconPng}
                  width="4px"

                />
                 {
                open?<>
                 <div className="notification-menu" id="notificationmenuID">
            <div className="subMenu">
              <h1>Notifications Here</h1>
            </div>
          </div>
                </> :<></>
              }
              </li>
             
              <li>
                <img src={messegePng}  />
              </li>
              <li>
                <img
                  src={settingPng}
                  
                />
              </li>
            </ul>
 
            <div className="nav-user-icon online">
              <div className="TopNavCircle-container"> < img className="topNavpreview-Image" src={userProfile} 
              onClick={toggleMenu}
               /></div>
             
              {open?<>
            <SettingMenu />
          </>:<></>}

            </div>
          </div>


         </nav>
        </>
     );
}
 
export default TopNavbar;