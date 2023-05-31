import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PagesToPage = () => {
    const { pageId} = useParams();
    const [pageData,setPageData]=useState([])
    const fetchAllPosts = async () => {
        const response = await axios.get(
          `http://localhost:5000/page/${pageId}`
        );
        console.log(response.data)
        setPageData(response.data)
        }    
    useEffect(() => {
        fetchAllPosts();
      }, []);
  
    return ( 
        <>
        <div className="main-content">
        <div className="mainBox">
          <div className="upperBox">

            <div className="cover_Photo-prev-DashToPro">
              <img className="cover_image" 
              src={pageData.coverImageUrl}
               alt="Profile" />
            </div>

            <div className="lowerBox">
              <div className="MoveAbleDiv">
              <div className="ProfilePictureDiv">
                <div className="profilePhoto-Preview">
              
                  <img className="profile_image"
                   src={pageData.profileImageUrl}
                
                    alt="Profile" />
                 
                </div>
              </div>
              
              </div>
              <div className="title">
                <h4>
                {pageData.pagename}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* {postData.map((item) => ( */}
          <div className="post-container">
            <div class="profile-postcard">
              <div class="postcard-header">
                <img 
                // src={item.profileImageUrl}
                src=""
                 alt="Profile Picture" class="profile-picture" />
                <div class="postcard-info">
                  <h2 class="name">
                    {/* {item.name} */}
                    </h2>
                  <p class="date">28 May 2023</p>
                </div>
              </div>

              <div class="postcard-content">
                <p class="message">
                    MIND TOHOUHTS
                    {/* {item.mindThoughts} */}
                    </p>
                <img 
                src=""
                // src={item.imageUrl}
                 alt="Photo" class="profileTimelinephoto" />
              </div>
              <div class="postcard-footer">
                <div class="likes">
                  <span class="like-icon">👍</span>
                  <span class="like-count">100 Likes</span>
                </div>
                <div class="comments">
                  <span class="comment-icon">💬</span>
                  <span class="comment-count">50 Comments</span>
                </div>
              </div>
            </div>
          </div>
        {/* ))} */}
      </div>
        </>
     );
}
 
export default PagesToPage;