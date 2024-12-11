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
                <button
                  onClick={() => deleteSellRecord(record._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
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
