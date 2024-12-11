import React, { useEffect, useState } from "react";
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
      <SellRecord />
      <div className="sell-container">
        <h1 className="sell-heading">Properties On Sale</h1>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <div className="properties-on-sale">
          {sellRecords && sellRecords.length > 0 ? (
            sellRecords.map((record) => (
              <div key={record._id.$oid} className="property-card">
                <div className="property-details">
                  <img src={checkProperty(record.propertyType)} alt="land image" className="img-fluid rounded shadow-sm" />
                  <h2 className="property-title">{record.title}</h2>
                  <p>
                    <strong>Owner Name:</strong> {record.ownerName}
                  </p>
                  <p>
                    <strong>Property Type:</strong> {record.propertyType}
                  </p>
                  <p>
                    <strong>Additional Address:</strong>{" "}
                    {record.additionalAddress}
                  </p>
                  <p>
                    <strong>City:</strong> {record.city}
                  </p>
                  <p>
                    <strong>Postcode:</strong> {record.postcode}
                  </p>
                  <p>
                    <strong>Nominee:</strong> {record.nominee}
                  </p>
                  {record.nominee === "yes" && (
                    <>
                      <p>
                        <strong>Nominee Name:</strong> {record.nomineeName}
                      </p>
                      <p>
                        <strong>Nominee Date of Birth:</strong>{" "}
                        {record.nomineeDOB}
                      </p>
                    </>
                  )}
                  <p>
                    <strong>Purchase Date:</strong>{" "}
                    {new Date(record.purchaseDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Terms:</strong> {record.terms}
                  </p>
                </div>
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
