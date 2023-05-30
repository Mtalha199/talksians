import "../Pages/UserPage.css"
import cover from "../Images/feed-image-1.png"
import profile from "../Images/member-1.png"
import { useEffect, useState } from "react"
import axios from "axios"

const UserPage = () => {
    const [pages,setPages]=useState([])

    const fetchAllPages=async ()=>{

            axios.get("http://localhost:5000/allPages").then((res)=>{
            console.log(res.data)
            setPages(res?.data)
        }).catch((e)=>{
            console.log(e)
        })
            


    }

    useEffect(()=>{
        fetchAllPages();
  
  
    },[])
    console.log(pages)
    return ( 
        <>
        
        <div className="likecard-container pages">
      
            {
                pages.map((item)=>(
                    
                        
                    <div className="likeCardBox">
   <div className="UpperBox">
      <div className="cover-box">
          <img src={item.coverImageUrl} alt="Cover-Photo" className="cover-image" />
        </div>
      </div>
      <div className="circle-container">
          <img src={item.profileImageUrl} alt="Circle" className="circle-image" />
        </div>
      <div className="lowerBox">
        <div className="PageName">
          <h5>{item.pagename}</h5>
        </div>
        <div className="BtnDiv">
          <button className="like-btn">Like</button>
        </div>
      </div>
      </div>
      
                   
                ))
            }
            
            </div>
      
    





    
        </>
     );
}
 
export default UserPage
;