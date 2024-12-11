import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SellRecord.css";
import { handleSuccess } from "../../utils/Utils";
import { ToastContainer } from "react-toastify";
const SellRecord = () => {
  const [sellData, setSellData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellData = async () => {
      try {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");
        const response = await axios.get(
          `http://localhost:8080/records/sell/records/${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSellData(response.data);
      } catch (err) {
        console.error("Error fetching sell records:", err);
        setError("Failed to fetch sell records");
      } finally {
        setLoading(false);
      }
    };

    fetchSellData();
  }, []);

  const deleteSellRecord = async (id) => {
    handleSuccess('Property Removed from sell')
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/records/sell/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete sell record");
      }

      const result = await response.json();
      console.log("Deleted Record:", result);

      setSellData((prevData) => prevData.filter((record) => record._id !== id));
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  const checkProperty=(type)=>{
    if(type==='Residential'){
      return 'https://plus.unsplash.com/premium_photo-1724659217647-4bfdba75e5a6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    else if(type==='Commercial'){
      return'https://images.unsplash.com/photo-1656646424531-cc9041d3e5ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    else if(record.propertyType==='Agricultural'){
      return 'https://images.unsplash.com/photo-1711397651462-3b2a22f5cfc8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    else if(record.propertyType==='Industrial'){
      return 'https://plus.unsplash.com/premium_photo-1677640957875-b004bb1c7b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kdXN0cmlhbCUyMGxhbmR8ZW58MHx8MHx8fDA%3D'
    }
  }
  return (
    <div>
      <hr />
      {sellData.length > 0 ? (
        <div className="card-container">
          {sellData.map((record, index) => (
            <div className="card" key={index}>
              <img src={checkProperty(record.propertyType)} alt="land image" className="img-fluid rounded shadow-sm w-100" />
              <h2>{record.title || "N/A"}</h2>

              <p>
                <strong>Owner:</strong> {record.ownerName || "N/A"}
              </p>
              <p>
                <strong>email:</strong> {record.email || "N/A"}
              </p>
              <p>
                <strong>Property Type:</strong> {record.propertyType || "N/A"}
              </p>
              <p>
                <strong>City:</strong> {record.city || "N/A"}
              </p>
              <p>
                <strong>Latitude:</strong> {record.latitude || "N/A"}
              </p>
              <p>
                <strong>Longitude:</strong> {record.longitude || "N/A"}
              </p>
              <p>
                <strong>Nominee:</strong> {record.nomineeName || "N/A"}
              </p>
              <p>
                <strong>Nominee DOB:</strong> {record.nomineeDOB || "N/A"}
              </p>
              <p>
                <strong>Postcode:</strong> {record.postcode || "N/A"}
              </p>
              <p>
                <strong>Address:</strong> {record.additionalAddress || "N/A"}
              </p>
              <p>
                <strong>Purchase Date:</strong> {record.purchaseDate || "N/A"}
              </p>
              <button onClick={() => deleteSellRecord(record._id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>No sell records found</div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default SellRecord;
