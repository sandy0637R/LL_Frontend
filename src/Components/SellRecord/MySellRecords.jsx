import axios from "axios";
import { useEffect, useState } from "react";

const MyRecords=()=>{
const [myRecord,setMyRecords]=useState()
const [workerRecord,setWorkerRecords]=useState()

// api for getting my own records from the sell database

const getAllSellRecords= async()=>{
    try {
        const token = localStorage.getItem("token"); 
        const response = await axios.get("http://localhost:8080/records/sell/records/",{
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });
setMyRecords(response.data)
console.log(response.data)
      } catch (error) {
        console.error("Error gettting sell records:", error);
      }
  
}
const workerRecords= async()=>{
    try {
        const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage
  
        const response = await axios.get("http://localhost:8080/records/workers",{
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });
setWorkerRecords(response.data)
console.log(response.data)
      } catch (error) {
        console.error("Error getting workers data:", error);
      }
  
}
useEffect(()=>{
  workerRecords();
  getAllSellRecords();
},[])

return(<><h1>MY property which are for sell</h1>
</>)


}
export default MyRecords;