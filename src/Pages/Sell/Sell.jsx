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
