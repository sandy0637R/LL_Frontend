import axios from "axios";


export const fetchRecordsApi = async () => {
  const token = localStorage.getItem("token"); // Retrieve JWT token
  try {
    const response = await axios.get("http://localhost:8080/records/", {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error; 
  }
};
