import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkerRecordsRequest } from "../../ReduxStore/reducer";
import './Worker.css'; // Import the CSS file

const Electrician = () => {
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState("experience");

  const workerRecords = useSelector((state) => state.records.workerRecords);
  const loading = useSelector((state) => state.records.loading);
  const error = useSelector((state) => state.records.error);

  useEffect(() => {
    dispatch(fetchWorkerRecordsRequest());
  }, [dispatch]);

  const electricians = workerRecords.filter((record) => record.designation === "Electrician");

  const sortedElectricians = [...electricians].sort((a, b) => {
    if (sortOption === "experience") {
      return b.experience_years - a.experience_years;
    }
    if (sortOption === "rating") {
      return b.rating - a.rating;
    }
    if (sortOption === "fees") {
      return  a.per_hour_fees - b.per_hour_fees;
    }
    return 0;
  });

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sendAppointmentEmail = (worker) => {
    const subject = `Appointment Request for ${worker.name}`;
    const body = `Hello,\n\nI would like to request an appointment with ${worker.name}, the electrician.\n\nDetails:\n- Designation: ${worker.designation}\n- Experience: ${worker.experience_years} years\n- Rating: ${worker.rating}\n- Fees: ₹${worker.per_hour_fees}\n- Contact: ${worker.contact_no}\n\nPlease let me know your availability.\n\nBest regards.`;
    window.location.href = `mailto:${worker.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <h1>Electrician Worker Records</h1>
      <div className="sort-dropdown">
        <select id="sort-options" onChange={handleSortChange}>
          <option value="experience">Experience</option>
          <option value="rating">Rating</option>
          <option value="fees">Fees</option>
        </select>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {sortedElectricians && sortedElectricians.length > 0 ? (
        <div className="cards-container">
          {sortedElectricians.map((record) => (
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
        <p>No electricians found.</p>
      )}
    </div>
  );
};

export default Electrician;
