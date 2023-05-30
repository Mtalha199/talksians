import "../Dashboard/Dashboard.css";
import profilePic from "../Images/profile-pic.png"
import feedImage from "../Images/feed-image-1.png"
import { useEffect,useContext, useState } from "react";
// import { UserContext } from "../UserContext/UserContext";
import {  useNavigate } from "react-router-dom";


import { Outlet } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
  const navigate = useNavigate();


  // const { data, setData } = useContext(UserContext);
  const [posts,setPosts]=useState([])
  const userId = localStorage.getItem("userId");

  const checkProfile=(userId)=>{
    return navigate(`/dashboard/userprofile/${userId}`);
  }
const fetchAllPosts=async ()=>{


             const response= await axios.get(`http://localhost:5000/allPosts/${userId}`)
             setPosts(response?.data)
}

  useEffect(()=>{
      fetchAllPosts();


  },[])



  return (
    <>
    <div class="main-content">
    
            {
              posts.map((item)=>(
                <div>
                  <div class="postcard">
                <div class="postcard-header">
                  <img src={profilePic} alt="Profile Picture" class="profile-picture" onClick={()=>checkProfile(item.id)}/>
                  <div class="postcard-info">
                    <h2 class="name" >{item.name} added a new Photo</h2>
                    <p class="date">28 May 2023</p>
                  </div>
                </div>
                <div class="postcard-content">
                  <p class="message">
                    Hello, friends! Just wanted to share this beautiful photo from my
                    recent trip. #Travel #Adventure
                  </p>
                  <img src={item.imageUrl} alt="Photo" class="photo" />
                </div>
                <div class="postcard-footer">
                  <div class="likes">
                    <span class="like-icon">👍</span>
                    <span class="like-count">
                     100 Likes
                    </span>
                  </div>
                  <div class="comments">
                    <span class="comment-icon">💬</span>
                    <span class="comment-count">50 Comments</span>
                  </div>
                </div>
              </div>
              </div>
              ))
            }
    
    </div>
    <Outlet />
    </>
  );
};
export default Dashboard;
