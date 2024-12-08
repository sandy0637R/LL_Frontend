import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SellRecord.css";
const SellRecord = () => {
  const [sellData, setSellData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8080/records/sell/records",
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
    <div>
      <h1>Sell Records</h1>
      {sellData.length > 0 ? (
        <div className="card-container">
          {sellData.map((record, index) => (
            <div className="card" key={index}>
              <h2>{record.title || "N/A"}</h2>
              <p>
                <strong>Owner:</strong> {record.ownerName || "N/A"}
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
              <button onClick={() => deleteSellRecord(record._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>No sell records found</div>
      )}
    </div>
  );
};

export default SellRecord;
