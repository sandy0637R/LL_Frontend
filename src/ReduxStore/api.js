import axios from "axios";

export const fetchRecordsApi = async () => {
  const response = await axios.get("http://localhost:8080/records/");
  return response.data;
};
