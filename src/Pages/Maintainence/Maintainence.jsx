import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './Maintainence.css';

const Maintainence = () => {
  const { data, loading, error } = useSelector((state) => state.records);
  const [isReminderDay, setIsReminderDay] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (currentDate.getDate() === 5) {
      setIsReminderDay(true);
    }
  }, [currentDate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="maintenance-section">
      <h1>Maintenance</h1>
      <p className="date">Today's Date: {formattedDate}</p>

      {isReminderDay && <p className="reminder">Reminder: Pay your maintenance dues today!</p>}

      {data.length > 0 ? (
        <div className="record-cards">
          {data.map((record, index) => {
            if (!record.totalPaid && !record.totalToBePaid) {
              return (
                <div className="card" key={index}>
                  <h3 className="card-title">{record.title || "No Title"}</h3>
                  <p><strong>Owner:</strong> {record.ownerName || "No Owner"}</p>
                  <p><strong>Date Entered:</strong> {formattedDate}</p>
                  <p className="no-maintenance">Nothing to be Maintained</p>
                </div>
              );
            }

            const amountRemaining =
              (record.totalToBePaid || 0) - (record.totalPaid || 0);

            const twoPercent = amountRemaining * 0.02;
            const interest = (record.totalToBePaid || 0) * 0.005;
            const totalMonthlyPayment = twoPercent + interest;

            const entryDate = record.dateEntered
              ? new Date(record.dateEntered).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : formattedDate;

            return (
              <div className="card" key={index}>
                <h3 className="card-title">{record.title || "No Title"}</h3>
                <p><strong>Owner:</strong> {record.ownerName || "No Owner"}</p>
                <p><strong>Property Type:</strong> {record.propertyType || "Not Specified"}</p>
                <p><strong>On Loan Amount Paid:</strong> ₹{record.totalPaid || 0}</p>
                <p><strong>Total Amount to Be Paid:</strong> ₹{record.totalToBePaid || 0}</p>
                <p><strong>Remaining Amount:</strong> ₹{amountRemaining}</p>
                <p><strong>This Month's Payment (2% + 0.5% interest):</strong> ₹{totalMonthlyPayment.toFixed(2)}</p>
                <p><strong>Date Entered:</strong> {entryDate}</p>

                <button onClick={toggleDetails} className="details-button">
                  {showDetails ? "Hide Details" : "Show Details"}
                </button>

                {showDetails && (
                  <div className="additional-details">
                    <p><strong>Longitude:</strong> {record.longitude || "Not Available"}</p>
                    <p><strong>Latitude:</strong> {record.latitude || "Not Available"}</p>
                    <p><strong>Address:</strong> {record.address || "Not Available"}</p>

                    {record.nomineeName && record.nomineeDOB && (
                      <>
                        <p><strong>Nominee Name:</strong> {record.nomineeName}</p>
                        <p><strong>Nominee DOB:</strong> {new Date(record.nomineeDOB).toLocaleDateString("en-US")}</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="no-maintenance">Nothing to be Maintained.</p>
      )}
    </div>
  );
};

export default Maintainence;
