import "../Dashboard/Dashboard.css";
import { useEffect, useState } from "react";
// import { UserContext } from "../UserContext/UserContext";
import {  useNavigate } from "react-router-dom";


import { Outlet } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {

  const navigate = useNavigate();


  const [posts,setPosts]=useState([])

  const userId = localStorage.getItem("userId");

  const checkProfile=(userId)=>{
    return navigate(`/dashboard/userprofile/${userId}`);
  }
const fetchAllPosts=async ()=>{

             const response= await axios.get(`http://localhost:5000/allPosts/${userId}`)
             const allData=response.data.combinePosts;
            setPosts(allData)
}

  useEffect(()=>{
      fetchAllPosts();


  },[])


  return (
    <>
    <div class="DashboardMain-content">
    
            {
              posts.map((item)=>(
                item.friendsPosts.map((i)=>(
                  item.friendprofile.map((ii)=>(
                    <div>
                  <div class="postcard">
                <div class="postcard-header">
                  <img src={ii.imageUrl} alt="Profile Picture" class="profile-picture" onClick={()=>checkProfile(i.id)}/>
                  <div class="postcard-info">
                    <h2 class="name" >{i.name} added a new Photo</h2>
                    <p class="date">28 May 2023</p>
                  </div>
                </div>
                <div class="postcard-content">
                  <p class="message">
                    {i.mindThoughts}
                  </p>
                  <img src={i.imageUrl} alt="Photo" class="photo" />
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

                ))
                
              ))
            }
    
    </div>
    <Outlet />
    </>
  );
};
export default Dashboard;
