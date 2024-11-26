import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeFromSell } from "../../ReduxStore/reducer";
import { handleError, handleSuccess } from "../../utils/Utils"; // Make sure these functions are defined
import "./SellContainer.css"

const SellContainer = () => {
  const dispatch = useDispatch();
  
  const [showDetails, setShowDetails] = useState(false);
  

  // Retrieve sell[] from Redux
  const sellRecords = useSelector((state) => state.records.sell);

  const handleRemoveFromSell = (id) => {
    dispatch(removeFromSell(id)); // Dispatch the remove action
  };

  const hasLoanInfo = (record) => record.loan || record.totalPaid || record.totalToBePaid;
  const hasNomineeInfo = (record) => record.nomineeName || record.nomineeDOB;
  const amountToPay = (record) => record.totalToBePaid && record.totalPaid
    ? record.totalToBePaid - record.totalPaid
    : null;

  
  return (
    <div>
      <div className='sell-main'>
      {sellRecords.length === 0 ? (
      <h3>Nothing to Sell !!!</h3>
      ) : (
        <ul>
          {sellRecords.map((record) => (
            <div key={record._id} className="record-main">
              {/* First Card */}
              {!showDetails && (
                <div className="first-card">
                  <div>
                    <h5 className="record-title">{record.title || "Not provided"}</h5>

                    {/* Property Type */}
                    <p>
                      <strong>Property Type:</strong> {record.propertyType || "Not provided"}
                    </p>

                    {/* Owner Name */}
                    <p>
                      <strong>Owner Name:</strong> {record.ownerName || "Not provided"}
                    </p>

                    {/* Loan Info */}
                    {hasLoanInfo(record) && (
                      <p>
                        <strong>Loan:</strong> {record.loan || "Not provided"}
                      </p>
                    )}

                    <button
                      className="record-button"
                      onClick={() => setShowDetails(true)}
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleRemoveFromSell(record._id)}
                      className="record-delete-btn"
                    >
                      Remove 
                    </button>
                
                  </div>
                </div>
              )}

              {/* Second Card with Update */}
              {showDetails && (
                <div className="details-card">
                  <h5 className="record-title">Property Details</h5>

                  <p>
                    <strong>Property Name:</strong> {record.title || "Not provided"}
                  </p>
                  <p>
                    <strong>Property Type:</strong> {record.propertyType || "Not provided"}
                  </p>
                  <p>
                    <strong>Owner Name:</strong> {record.ownerName || "Not provided"}
                  </p>
                  <p>
                    <strong>Post Code:</strong> {record.postcode || "Not provided"}
                  </p>
                  <p>
                    <strong>Address:</strong> {record.additionalAddress || "Not provided"}
                  </p>
                  <p>
                    <strong>City:</strong> {record.city || "Not provided"}
                  </p>

                  {/* Loan Info */}
                  {hasLoanInfo(record) && (
                    <div>
                      <p>
                        <strong>Loan:</strong> {record.loan || "Not provided"}
                      </p>
                      <p>
                        <strong>Total Paid:</strong> {record.totalPaid || "Not provided"}
                      </p>
                      <p>
                        <strong>Total Amount To Pay:</strong> {record.totalToBePaid || "Not provided"}
                      </p>
                      {amountToPay(record) !== null && (
                        <p>
                          <strong>Amount To Pay:</strong> {amountToPay(record)}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Nominee Info */}
                  {hasNomineeInfo(record) && (
                    <div>
                      <p>
                        <strong>Nominee Name:</strong> {record.nomineeName || "Not provided"}
                      </p>
                      <p>
                        <strong>Nominee Date of Birth:</strong> {record.nomineeDOB || "Not provided"}
                      </p>
                    </div>
                  )}

                  {/* Additional Info */}
                  <p>
                    <strong>Purchase Date:</strong> {record.purchaseDate || "Not provided"}
                  </p>

                 

                  {/* Back Button */}
                  <button
                    className="record-button"
                    onClick={() => setShowDetails(false)}
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

      
    </div>
  )
}

export default SellContainer
