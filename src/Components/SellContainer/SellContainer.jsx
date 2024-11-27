import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromSell } from "../../ReduxStore/reducer";
import "./SellContainer.css";

const SellContainer = () => {
  const dispatch = useDispatch();

  const sellRecords = useSelector((state) => state.records.sell);
  const [expandedRecord, setExpandedRecord] = useState(null);

  const handleRemoveFromSell = (id) => {
    dispatch(removeFromSell(id));
  };

  const toggleDetails = (id) => {
    setExpandedRecord((prev) => (prev === id ? null : id));
  };

  const hasLoanInfo = (record) =>
    record.loan || record.totalPaid || record.totalToBePaid;
  const hasNomineeInfo = (record) => record.nomineeName || record.nomineeDOB;
  const amountToPay = (record) =>
    record.totalToBePaid && record.totalPaid
      ? record.totalToBePaid - record.totalPaid
      : null;

  return (
    <div className="sell-main">
      {sellRecords.length === 0 ? (
        <h3>Nothing to Sell !!!</h3>
      ) : (
        <ul className="sell-card-contain">
          {sellRecords.map((record) => (
            <div key={record._id} className="record-card">
              {/* First Card */}
              <div
                className={`first-card ${
                  expandedRecord === record._id ? "blurred" : ""
                }`}
              >
                <h5 className="record-title">
                  {record.title || "Not provided"}
                </h5>
                <p>
                  <strong>Property Type:</strong>{" "}
                  {record.propertyType || "Not provided"}
                </p>
                <p>
                  <strong>Owner Name:</strong>{" "}
                  {record.ownerName || "Not provided"}
                </p>
                {hasLoanInfo(record) && (
                  <p>
                    <strong>Loan:</strong> {record.loan || "Not provided"}
                  </p>
                )}
                <button
                  className="record-button"
                  onClick={() => toggleDetails(record._id)}
                >
                  {expandedRecord === record._id
                    ? "Hide Details"
                    : "View Details"}
                </button>
                <button
                  onClick={() => handleRemoveFromSell(record._id)}
                  className="record-delete-btn"
                >
                  Remove
                </button>
              </div>

              {/* Second Card */}
              {expandedRecord === record._id && (
                <div className="second-card" style={{ marginTop: "20px" }}>
                  <h5 className="record-title">Property Details</h5>
                  <p>
                    <strong>Property Name:</strong>{" "}
                    {record.title || "Not provided"}
                  </p>
                  <p>
                    <strong>Property Type:</strong>{" "}
                    {record.propertyType || "Not provided"}
                  </p>
                  <p>
                    <strong>Owner Name:</strong>{" "}
                    {record.ownerName || "Not provided"}
                  </p>
                  <p>
                    <strong>Post Code:</strong>{" "}
                    {record.postcode || "Not provided"}
                  </p>
                  <p>
                    <strong>Address:</strong>{" "}
                    {record.additionalAddress || "Not provided"}
                  </p>
                  <p>
                    <strong>City:</strong> {record.city || "Not provided"}
                  </p>
                  {hasLoanInfo(record) && (
                    <div>
                      <p>
                        <strong>Loan:</strong> {record.loan || "Not provided"}
                      </p>
                      <p>
                        <strong>Total Paid:</strong>{" "}
                        {record.totalPaid || "Not provided"}
                      </p>
                      <p>
                        <strong>Total Amount To Pay:</strong>{" "}
                        {record.totalToBePaid || "Not provided"}
                      </p>
                      {amountToPay(record) !== null && (
                        <p>
                          <strong>Amount To Pay:</strong> {amountToPay(record)}
                        </p>
                      )}
                    </div>
                  )}
                  {hasNomineeInfo(record) && (
                    <div>
                      <p>
                        <strong>Nominee Name:</strong>{" "}
                        {record.nomineeName || "Not provided"}
                      </p>
                      <p>
                        <strong>Nominee DOB:</strong>{" "}
                        {record.nomineeDOB || "Not provided"}
                      </p>
                    </div>
                  )}
                  <p>
                    <strong>Purchase Date:</strong>{" "}
                    {record.purchaseDate || "Not provided"}
                  </p>
                  <button
                    className="record-button"
                    onClick={() => toggleDetails(record._id)}
                  >
                    Back
                  </button>
                </div>
              )}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SellContainer;
