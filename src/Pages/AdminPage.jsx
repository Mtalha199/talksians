
import CreatePageModal from "../CreatePageModal/CreatePageModal";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const AdminPage = () => {
  const navigate = useNavigate();

    const [pages, setPages] = useState([]);
  
    const fetchAllPages = async () => {
      axios
        .get("http://localhost:5000/allPages")
        .then((res) => {
          // console.log(res.data);
          setPages(res?.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
  
    useEffect(() => {
      fetchAllPages();
    }, []);


    const delPage=(pageId)=>{
      axios.post(`http://localhost:5000/deletePage/${pageId}`).then((res)=>{
        toast.success(res.data)
        window.location.reload();
      }).catch((e)=>{
        toast.error(e.data)
        
      })

      
      
    }
    const showPage=(pageId)=>{
      // console.log(pageId)
     return navigate(`/dashboard/page/${pageId}`)

    }
   return(
    <>

  <div className="modal-div">
        <CreatePageModal/>

        </div>
        <div className="likecard-container pages">
        {pages.map((item) => (
          <div className="likeCardBox">
            <div className="UpperBox">
              <div className="cover-box">
                <img
                  src={item.coverImageUrl}
                  alt="Cover-Photo"
                  className="cover-image"
                  onClick=""
                />
              </div>
            </div>
            <div className="circle-container">
              <img
                src={item.profileImageUrl}
                alt="Circle"
                className="circle-image"
                onClick={()=>showPage(item._id)}
              />
              
            </div>
            <div className="lowerBox">
              <div className="PageName">
                <h5>{item.pagename}</h5>
              </div>
              <div className="BtnDiv">
                <button className="like-btn">Like</button>
                <button onClick={()=>delPage(item._id)}> del</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
        
      </>
    );
  };
  export default AdminPage;