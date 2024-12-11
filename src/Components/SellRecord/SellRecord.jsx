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
    handleSuccess("Property Removed from sell");
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

  return (
    <div className="sell-rec-main">
      <h1 className="sell-rec-q-heading">Your Properties for Sale !!!</h1>
      {sellData.length > 0 ? (
        <div className="sell-card-container">
          {sellData.map((record, index) => (
            <div className="sell-card" key={index}>
              <h2 className="sell-rec-title">{record.title || "N/A"}</h2>
              <p className="sell-rec-p">
                <span className="sell-rec-span"> Owner:</span>{" "}
                {record.ownerName || "N/A"}
              </p>
              <p className="sell-rec-p">
                <span className="sell-rec-span">Email:</span>{" "}
                {record.email || "N/A"}
              </p>
              <p className="sell-rec-p">
                <span className="sell-rec-span">Property Type:</span>{" "}
                {record.propertyType || "N/A"}
              </p>
              <p className="sell-rec-p">
                <span className="sell-rec-span"> City:</span>{" "}
                {record.city || "N/A"}
              </p>
              <p className="sell-rec-p">
                <span className="sell-rec-span">Latitude:</span>{" "}
                {record.latitude || "N/A"}
              </p>
              <p className="sell-rec-p">
                <span className="sell-rec-span">Longitude:</span>{" "}
                {record.longitude || "N/A"}
              </p>
              <p className="sell-rec-p">
                <span className="sell-rec-span">Nominee:</span>{" "}
                {record.nomineeName || "N/A"}
              </p>
              <p className="sell-rec-p">
                <span className="sell-rec-span">Nominee DOB:</span>{" "}
                {record.nomineeDOB || "N/A"}
              </p>
              <p className="sell-rec-p">
                <span className="sell-rec-span">Postcode:</span>{" "}
                {record.postcode || "N/A"}
              </p>
              <p className="sell-rec-p">
                <span className="sell-rec-span">Address:</span>{" "}
                {record.additionalAddress || "N/A"}
              </p>
              <p className="sell-rec-p">
                <span className="sell-rec-span">Purchase Date:</span>{" "}
                {record.purchaseDate || "N/A"}
              </p>
              <button
                onClick={() => deleteSellRecord(record._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>No sell records found</div>
      )}
      <ToastContainer />
    </div>
  );
};

export default SellRecord;
