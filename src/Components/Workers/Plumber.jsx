import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkerRecordsRequest } from "../../ReduxStore/reducer";
import "./Worker.css"; // Import the CSS file

const Plumber = () => {
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState("experience");

  const workerRecords = useSelector((state) => state.records.workerRecords);
  const loading = useSelector((state) => state.records.loading);
  const error = useSelector((state) => state.records.error);

  useEffect(() => {
    dispatch(fetchWorkerRecordsRequest());
  }, [dispatch]);

  const plumbers = workerRecords.filter(
    (record) => record.designation === "Plumber"
  );

  const sortedPlumbers = [...plumbers].sort((a, b) => {
    if (sortOption === "experience") {
      return b.experience_years - a.experience_years;
    }
    if (sortOption === "rating") {
      return b.rating - a.rating;
    }
    if (sortOption === "fees") {
      return a.per_hour_fees - b.per_hour_fees;
    }
    return 0;
  });

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sendAppointmentEmail = (worker) => {
    const subject = `Appointment Request for ${worker.name}`;
    const body = `Hello,\n\nI would like to request an appointment with ${worker.name}, the plumber.\n\nDetails:\n- Designation: ${worker.designation}\n- Experience: ${worker.experience_years} years\n- Rating: ${worker.rating}\n- Fees: ₹${worker.per_hour_fees}\n- Contact: ${worker.contact_no}\n\nPlease let me know your availability.\n\nBest regards.`;
    window.location.href = `mailto:${worker.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="worker-main">
      <div className="worker-head-sec">
        <h1 className="worker-heading">Plumber </h1>
        <div className="sort-dropdown">
          <select id="sort-options" onChange={handleSortChange}>
            <option value="experience">Experience</option>
            <option value="rating">Rating</option>
            <option value="fees">Fees</option>
          </select>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {sortedPlumbers && sortedPlumbers.length > 0 ? (
        <div className="worker-card-container">
          {sortedPlumbers.map((record) => (
            <div key={record._id.$oid} className="worker-card">
              <img
                src={record.image}
                alt={record.name}
                className="workers-img"
              />
              <div className="worker-card-content">
                <h2 className="worker-title">{record.name}</h2>
                <p className="worker-info">
                  <span className="worker-info-label">Designation:</span>{" "}
                  {record.designation}
                </p>
                <p className="worker-info">
                  <span className="worker-info-label">Experience:</span>{" "}
                  {record.experience_years} years
                </p>
                <p className="worker-info">
                  <span className="worker-info-label">Hourly Fees:</span> ₹
                  {record.per_hour_fees}
                </p>
                <p className="worker-info">
                  <span className="worker-info-label">Contact:</span>{" "}
                  {record.contact_no}
                </p>
                <p className="worker-info">
                  <span className="worker-info-label">Email:</span>{" "}
                  {record.email}
                </p>
                <div className="card-info-sec">
                  <p className="worker-info" style={{ marginRight: "20px" }}>
                    <span className="worker-info-label">Rating:</span>{" "}
                    {record.rating}
                  </p>{" "}
                  <p className="worker-info">
                    <span className="worker-info-label">Gender:</span>{" "}
                    {record.gender}
                  </p>
                </div>
                <button
                  className="worker-appointment-button"
                  onClick={() => sendAppointmentEmail(record)}
                >
                  Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No plumbers found.</p>
      )}
    </div>
  );
};

export default Plumber;
