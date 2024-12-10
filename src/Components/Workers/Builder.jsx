import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkerRecordsRequest } from "../../ReduxStore/reducer";
import './Worker.css'; // Import the CSS file

const Builder = () => {
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState("experience"); // To manage the selected sort option

  // Access workerRecords from Redux state
  const workerRecords = useSelector((state) => state.records.workerRecords);
  const loading = useSelector((state) => state.records.loading);
  const error = useSelector((state) => state.records.error);

  // Dispatch action to fetch worker records when the component mounts
  useEffect(() => {
    dispatch(fetchWorkerRecordsRequest());
  }, [dispatch]);

  // Filter the worker records to show only those with the designation "Builder"
  const builders = workerRecords.filter(
    (record) => record.designation === "Builder"
  );

  // Sort builders based on the selected sort option
  const sortedBuilders = [...builders].sort((a, b) => {
    if (sortOption === "experience") {
      return b.experience_years - a.experience_years; // Sort by experience (max to min)
    }
    if (sortOption === "rating") {
      return b.rating - a.rating; // Sort by rating (max to min)
    }
    if (sortOption === "fees") {
      return  a.per_hour_fees - b.per_hour_fees ; // Sort by fees (max to min)
    }
    return 0;
  });

  // Handler for dropdown change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Function to generate the "mailto" link with appointment details
  const sendAppointmentEmail = (worker) => {
    const subject = `Appointment Request for ${worker.name}`;
    const body = `Hello,\n\nI would like to request an appointment with ${worker.name}, the builder.\n\nDetails:\n- Designation: ${worker.designation}\n- Experience: ${worker.experience_years} years\n- Rating: ${worker.rating}\n- Fees: ₹${worker.per_hour_fees}\n- Contact: ${worker.contact_no}\n\nPlease let me know your availability.\n\nBest regards.`;
    window.location.href =`mailto:${worker.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <h1>Builder Worker Records</h1>
      <div className="sort-dropdown">
        <select id="sort-options" onChange={handleSortChange}>
          <option value="experience">Experience</option>
          <option value="rating">Rating</option>
          <option value="fees">Fees</option>
        </select>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {sortedBuilders && sortedBuilders.length > 0 ? (
        <div className="cards-container">
          {sortedBuilders.map((record) => (
            <div key={record._id.$oid} className="card">
              <img
                src={record.image}
                alt={record.name}
                className="card-image"
              />
              <div className="card-content">
                <h2 className="card-title">{record.name}</h2>
                <p><strong>Designation:</strong> {record.designation}</p>
                <p><strong>Experience:</strong> {record.experience_years} years</p>
                <p><strong>Rating:</strong> {record.rating}</p>
                <p><strong>Hourly Fees:</strong> ₹{record.per_hour_fees}</p>
                <p><strong>Contact:</strong> {record.contact_no}</p>
                <p><strong>Email:</strong> {record.email}</p>
                <p><strong>Gender:</strong> {record.gender}</p>
                <button
                  className="appointment-button"
                  onClick={() => sendAppointmentEmail(record)}
                >
                  Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No builders found.</p>
      )}
    </div>
  );
};

export default Builder;