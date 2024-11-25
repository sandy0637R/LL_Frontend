import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecordsRequest } from "../../ReduxStore/reducer"; // Correctly imported action
import "./Maintainence.css";

const Maintainence = () => {
  const dispatch = useDispatch();
  const { data = [], loading, error } = useSelector((state) => state.records);

  const [isReminderDay, setIsReminderDay] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState([]);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    dispatch(fetchRecordsRequest());
  }, [dispatch]);

  useEffect(() => {
    setIsReminderDay(currentDate.getDate() === 5);
  }, [currentDate]);

  const toggleDetails = (index) => {
    setDetailsVisible((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="maintainence-background">
      <div className="maintenance-section">
        <h1>Maintenance</h1>
        <p className="date">Today's Date: {formattedDate}</p>

        {isReminderDay && (
          <p className="reminder">Reminder: Pay your maintenance dues today!</p>
        )}

        <div className="rec-cards-container">
          {data.length > 0 ? (
            <div className="record-cards">
              {data.map((record, index) => {
                const amountRemaining =
                  (record.totalToBePaid || 0) - (record.totalPaid || 0);
                const monthlyPayment =
                  amountRemaining * 0.02 + (record.totalToBePaid || 0) * 0.005;

                return (
                  <div className="rec-card rec-detail-card" key={index}>
                    <h3 className="rec-card-title">
                      {record.title || "No Title"}
                    </h3>
                    <p>
                      <strong>Owner:</strong> {record.ownerName || "No Owner"}
                    </p>
                    <p>
                      <strong>Property Type:</strong>{" "}
                      {record.propertyType || "Not Specified"}
                    </p>
                    <p>
                      <strong>Paid Amount:</strong> ₹{record.totalPaid || 0}
                    </p>
                    <p>
                      <strong>Total Amount:</strong> ₹
                      {record.totalToBePaid || 0}
                    </p>
                    <p>
                      <strong>Remaining Amount:</strong> ₹{amountRemaining}
                    </p>
                    <p>
                      <strong>Monthly Payment (2% + 0.5% interest):</strong> ₹
                      {monthlyPayment.toFixed(2)}
                    </p>
                    <p>
                      <strong>Purchase Date:</strong>{" "}
                      {record.purchaseDate || "Not Available"}
                    </p>

                    <button
                      onClick={() => toggleDetails(index)}
                      className="details-button"
                    >
                      {detailsVisible[index] ? "Hide Details" : "Show Details"}
                    </button>

                    {detailsVisible[index] && (
                      <div className="additional-details">
                        <p>
                          <strong>Longitude:</strong>{" "}
                          {record.longitude || "Not Available"}
                        </p>
                        <p>
                          <strong>Latitude:</strong>{" "}
                          {record.latitude || "Not Available"}
                        </p>
                        <p>
                          <strong>Address:</strong>{" "}
                          {record.address || "Not Available"}
                        </p>
                        {record.nomineeName && record.nomineeDOB && (
                          <>
                            <p>
                              <strong>Nominee Name:</strong>{" "}
                              {record.nomineeName}
                            </p>
                            <p>
                              <strong>Nominee DOB:</strong>{" "}
                              {new Date(record.nomineeDOB).toLocaleDateString(
                                "en-US"
                              )}
                            </p>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="no-maintenance">Nothing to be maintained!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Maintainence;
