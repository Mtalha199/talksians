import { useState,useEffect} from "react";
 import { UserContext } from "./UserContext";

const MyProvider = ({children}) => {
    
    const [data, setData] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData) );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myData',JSON.stringify(data) );
  }, [data]);

  // Your other context provider logic

  return(
    <>
     <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
    </>
  )
}
 
export default MyProvider;