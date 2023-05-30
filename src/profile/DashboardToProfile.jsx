
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const DashboardToProfile = () => {






    const {userId}=useParams();
    console.log(userId);
    const fetchAllPosts=async ()=>{


        const response= await axios.get(`http://localhost:5000/userProfile/${userId}`)
        // setPosts(response?.data)
        console.log(response.data)
}

    useEffect(()=>{
        fetchAllPosts();
  
  
    },[])
  
    return ( 
        <>
         <div className="main-content">
         <div className="mainBox">
      <div className="upperBox">
      <div className="cover_image-prev">
        <img className="cover_image" src="" alt="Profile" />
      </div>
      <div className="lowerBox">
      <div className="ProfileImageDiv">

      <div className="profile_image-prev">
        <img className="profile_image" src="" alt="Profile" />
      </div>
     
        </div>
        <div className="title">
          <h4>Tarar</h4>

      </div>
</div>
</div>
</div>




        <div className="post-container">
                  <div class="profile-postcard">
        <div class="postcard-header">
          <img src="" alt="Profile Picture" class="profile-picture" />
          <div class="postcard-info">
            <h2 class="name">Nmae</h2>
            <p class="date">28 May 2023</p>
           
                
          </div>
        </div>
        
        <div class="postcard-content">
          <p class="message">
          Mind Toughts
          </p>
          <img src="" alt="Photo" class="profileTimelinephoto" />
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
        </div>
        </>
     );
}
 
export default DashboardToProfile;