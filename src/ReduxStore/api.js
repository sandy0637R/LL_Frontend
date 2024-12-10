import axios from "axios";

// Fetch specific user records using email from localStorage
export const fetchRecordsApi = async () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  try {
    const response = await axios.get(`http://localhost:8080/records/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error; // Re-throw the error to handle it in Redux-Saga
  }
};

// Fetch all sell records
export const getAllSellRecordsAPI = async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/records/sell/records/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting sell records:", error);
    throw error;
  }
};

// Fetch worker records
export const getWorkerRecordsAPI = async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/records/workers", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting worker records:", error);
    throw error;
  }
};


