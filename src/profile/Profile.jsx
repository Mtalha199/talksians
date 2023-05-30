import axios from "axios";
import { useEffect, useState ,useContext} from "react";
import feedImage from "../Images/feed-image-1.png";
import profilePic from "../Images/profile-pic.png"
import elipsis from "../Images/ellipsis-icon.png"
import ProfileImageCard from "./ProfileImageCard";
import CoverImageCard from "./CoverImageCard";
import { UserContext } from "../UserContext/UserContext";





const Profile = () => {


  const {data,setData} =useContext(UserContext)
  // console.log(data)
  const [posts, setPosts] = useState([]);

  const userId = localStorage.getItem("userId");
  const updatedUserId = {
    id: userId,
  };
  const fetchPost = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/post/showPosts",
        updatedUserId
      );
      setPosts(response.data);
    } catch (e) {
      console.log(e.response);
    }
  };

  
  const sortedPosts=[...posts].reverse();
  // console.log(sortedPosts)
  const deletePost=async(_id)=>{
    const updatedDelPost={
      id:_id
    }
    console.log(updatedDelPost)
    await axios.post("http://localhost:5000/post/deletePost",updatedDelPost).then((res)=>{
      alert(res.data)
      window.location.reload();
    }).catch((e)=>{
      console.log(e)
    })
  }

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
     

     <div className="main-content">
    
     <div className="mainBox">
      <div className="upperBox">
        <CoverImageCard />
      </div>
      {/*------------------ lower Div--------------------------------------------------------*/}
      <div className="lowerBox">
        <div className="ProfileImageDiv">
          <ProfileImageCard />
        </div>
        <div className="title">
          <h4>{data?.aridnoExist?.name}({data?.aridnoExist?.aridno})</h4>
        </div>
      </div>
    </div>
    <div >
    <div className="profileBar">
    </div>
     
    </div>
              
              {sortedPosts.map((item) => (
                 
                 <div className="post-container">
                  <div class="profile-postcard">
        <div class="postcard-header">
          <img src={data?.aridnoExist?.imageUrl} alt="Profile Picture" class="profile-picture" />
          <div class="postcard-info">
            <h2 class="name">{data?.aridnoExist?.name}({data?.aridnoExist.aridno})</h2>
            <p class="date">28 May 2023</p>
           
                
          </div>
        </div>
        <button onClick={()=>deletePost(item._id)}>Delete</button>
        
        <div class="postcard-content">
          <p class="message">
          {item.mindThoughts}
          </p>
          <img src={item.imageUrl} alt="Photo" class="profileTimelinephoto" />
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
          
              ))}
           
           </div>

    </>
  );
};

export default Profile;
