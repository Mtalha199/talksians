import axios from "axios";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AdminPage = () => {
    const initialValues = {
      pgName: "",
      Image: null,
      coverImage: null,
    };
    const [pages, setPages] = useState(initialValues);
  
    const handleChange = (e) => {
        if(e.target.name === "Image")
        {
            const file = e.target.files[0];
            setPages({ ...pages, Image: file });
          }
          else if(e.target.name === "coverImage")
          {
            const file = e.target.files[0];
            setPages({ ...pages, coverImage: file });
          }
          else {
            const { name, value } = e.target;
            setPages((prev) => ({
              ...prev,
              [name]: value,
            }));
          }
    }
    console.log(pages)
  
    const updatedData={
        pagename:pages.pgName,
        Image:pages.Image,
        coverImage:pages.coverImage,
    }
    console.log(updatedData)
    const postPageData=async()=>{
        toast("Creating Your Page")
        // alert("udfys")
        await axios.post("http://localhost:5000/createPage",updatedData,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then((res)=>{
            console.log(res.data)
            toast.success(res.data)
        }).catch((err)=>{
            console.log(err)
        })


}
    return (
      <>
        <input
          type="text"
          name="pgName"
          value={pages.pgName}
          onChange={handleChange}
        />
        <br />
        <input
          type="file"
          name="Image"
          accept="image/*"
          onChange={handleChange}
        />
        <br />
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          onChange={handleChange}
        />


        <button onClick={postPageData}>Post Data</button>

        <ToastContainer />

      </>
    );
  };
  export default AdminPage;