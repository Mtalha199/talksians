import axios from "axios";
import { useEffect ,useContext,useState } from "react";
import { UserContext } from "../UserContext/UserContext";



const ResponseRequest = () => {
  const {data,setData}=useContext(UserContext)
  const [userData,setUserData]=useState([])



  const acceptRequest=async(senderId,objectId)=>
  {

   const updatedData={
    objectId:objectId,
    senderId:senderId,
    recieverId:data?.aridnoExist?._id
   }   

    await axios.post("http://localhost:5000/responseRequest",updatedData).then((res)=>{
        console.log(res)
        if(res)
        {
           const hwawai= userData.filter(item=>item._id !== senderId)
           setUserData(hwawai)
           window.location.reload();
        }
    }).catch((e)=>{
        console.log(e)
    })
  }



    const fetchAllRequestedFriend=async()=>{

        
        try{
            const response= await axios.get(`http://localhost:5000/requestedFriend/${data?.aridnoExist?._id}`)
            setUserData(response?.data)
            console.log(response?.data)
            // console.log(response.data)
        }
        catch(err)
        {
            console.log(err)
        }
       

    }
    useEffect(()=>{

        fetchAllRequestedFriend();
    },[])

    // console.log(userData)

    return ( 
        <>
          <div class="BoxForFriendCard">
          <div className="FriendReqBar">
      <div className="Request-title">
        <h5 className="LMSHeading">Friend Requests</h5>
      </div>
    </div>
            {
                    userData.map((item)=>(
                        <div className="FriendCard-Container">
                        <div class="AddFriendCard">
                    <div class="cardBox">
                    <img className="cardPic" src={item.senderProfile} alt="Card Profile" />
                    <div className="title"><h4>{item.senderName}</h4></div>
                    <button className="btnAdd" onClick={()=>{acceptRequest(item.senderId,item._id)}}>
                        Accept
                    </button>
                    <button className="cancelBtn">Cancel</button>
                    </div>
                 </div>    
                 </div>
                    ))
                    
            }
             </div>
      
      
        </>
     );
}
 
export default ResponseRequest;