import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSellRecordsRequest } from "../../ReduxStore/reducer";
import "./Sell.css";
import SellRecord from "../../Components/SellRecord/SellRecord";
const Sell = () => {
  const dispatch = useDispatch();

  const sellRecords = useSelector((state) => state.records.sellRecords);
  const loading = useSelector((state) => state.records.loading);
  const error = useSelector((state) => state.records.error);

  useEffect(() => {
    dispatch(fetchSellRecordsRequest());
  }, [dispatch]);
  const getPropertyImage = (propertyType) => {
    switch (propertyType) {
      case "Residential":
        return "https://plus.unsplash.com/premium_photo-1724659217647-4bfdba75e5a6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case "Commercial":
        return "https://images.unsplash.com/photo-1656646424531-cc9041d3e5ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case "Agricultural":
        return "https://images.unsplash.com/photo-1711397651462-3b2a22f5cfc8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case "Industrial":
        return "https://plus.unsplash.com/premium_photo-1677640957875-b004bb1c7b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kdXN0cmlhbCUyMGxhbmR8ZW58MHx8MHx8fDA%3D";
      default:
        return "https://via.placeholder.com/150"; // Fallback image
    }}
  return (
    <div className="sell-main">
      <div className="user-rec-sec">
        <SellRecord />
      </div>
      <div className="properties-on-sale">
        <h1 className="sell-heading">Properties On Sale</h1>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <div className="sell-container">
          {sellRecords && sellRecords.length > 0 ? (
            sellRecords.map((record) => (
              <div className="sell-card" key={record._id.$oid}>
                 <img
  src={getPropertyImage(record.propertyType)}
  alt="Property"
  className="img-fluid rounded shadow-sm"
/>

                <h2 className="sell-title">{record.title || "N/A"}</h2>
                <p className="sell-p">
                  <span className="sell-span"> Owner:</span>{" "}
                  {record.ownerName || "N/A"}
                </p>
                <p className="sell-p">
                  <span className="sell-span">Email:</span>{" "}
                  {record.email || "N/A"}
                </p>
                <p className="sell-p">
                  <span className="sell-span">Property Type:</span>{" "}
                  {record.propertyType || "N/A"}
                </p>
                <p className="sell-p">
                  <span className="sell-span"> City:</span>{" "}
                  {record.city || "N/A"}
                </p>
                <p className="sell-p">
                  <span className="sell-span">Latitude:</span>{" "}
                  {record.latitude || "N/A"}
                </p>
                <p className="sell-p">
                  <span className="sell-span">Longitude:</span>{" "}
                  {record.longitude || "N/A"}
                </p>
                <p className="sell-p">
                  <span className="sell-span">Nominee:</span>{" "}
                  {record.nomineeName || "N/A"}
                </p>
                <p className="sell-p">
                  <span className="sell-span">Nominee DOB:</span>{" "}
                  {record.nomineeDOB || "N/A"}
                </p>
                <p className="sell-p">
                  <span className="sell-span">Postcode:</span>{" "}
                  {record.postcode || "N/A"}
                </p>
                <p className="sell-p">
                  <span className="sell-span">Address:</span>{" "}
                  {record.additionalAddress || "N/A"}
                </p>
                <p className="sell-p">
                  <span className="sell-span">Purchase Date:</span>{" "}
                  {record.purchaseDate || "N/A"}
                </p>
             
              </div>
            ))
          ) : (
            <p>No properties found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sell;
