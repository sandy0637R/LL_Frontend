import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Explore = () => {
  const [dummyData,setDummyData]=useState([])
  // i am just adding this to check the /dummy api 
  const fetchRecordsApi = async () => {
      const token = localStorage.getItem("token"); // Retrieve JWT token
      try {
        const response = await axios.get(`http://localhost:8080/records/dummys`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log(response.data)
        setDummyData(response.data);
      } catch (error) {
        console.error("Error fetching records:", error);
        throw error; 
      }}
      useEffect(()=>fetchRecordsApi,[]);

  return (


    <div>
      Explore
      {dummyData.map((rec)=>{
        return (<div className="container">
         <p>{rec.address}</p>
         <p>{rec.cityName}</p>
         <p>{rec.latitude}</p>
         <p>{rec.longitude}</p>
         <p>{rec.postCode}</p>
         <p>{rec.propertyName}</p>
         <p>{rec.propertyType}</p>
         <img src={rec.image} alt="image" width={400}/>
        </div>)
      })}
    </div>
  )
}

export default Explore
