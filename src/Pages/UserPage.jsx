import "../Pages/UserPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";

const UserPage = () => {
  const {data,setData}=useContext(UserContext)
  const isAdmin=data?.aridnoExist?.isAdmin;

  const navigate = useNavigate();

  const [pages, setPages] = useState([]);

  const fetchAllPages = async () => {
    axios
      .get("http://localhost:5000/allPages")
      .then((res) => {
        console.log(res.data);
        setPages(res?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchAllPages();
  }, []);

  const showPage=(pageId)=>{
    // console.log(pageId)
   return navigate(`/dashboard/page/${pageId}`)

  }
  // console.log(pages);
  return (
    <>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPage;
