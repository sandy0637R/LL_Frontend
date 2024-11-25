import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ExploreList from './expore-list/ExploreList';

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

  return (<>
 <h1 className='text-center m-3'>Explore More </h1>
      {
        dummyData.map((rec,index)=>{
          return <ExploreList rec={rec} key={index}/>
        })
      }
      </>
  )
}

export default Explore
