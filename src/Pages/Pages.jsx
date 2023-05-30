import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";

const Pages = () => {
  const {data,setData}=useContext(UserContext)
// console.log(data?.aridnoExist?.isAdmin)
const isAdmin=data?.aridnoExist?.isAdmin;
// console.log(isAdmin)
    return ( 
        <>
 <div class="main-content">

{
    isAdmin!=='TARAR' ?  <UserPage/>: <AdminPage />
}
        </div>
        </>
     );
}
 
export default Pages;
