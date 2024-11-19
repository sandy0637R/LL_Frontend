import React, { useState } from "react";

const DocRecord = ({ obj }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentDoc, setCurrentDoc] = useState(null);

  const handleViewClick = (document) => {
    setCurrentDoc(document);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentDoc(null);
  };

  return (
    <div className="card mb-3">
      {/* First card */}
      <div className="card-body">
        <p className="card-text">
          <strong>Property Name:</strong> {obj.title || "Not provided"}
        </p>
        <p className="card-text">
          <strong>Owner Name:</strong> {obj.ownerName || "Not provided"}
        </p>

        {/* Documents Section */}
        <h6>Documents:</h6>
        <ul className="list-group">
          {/* Aadhar Card */}
          {obj.documents?.adharCard?.name && (
            <li className="list-group-item">
              <strong>Aadhar Card:</strong>
              <button
                className="btn btn-primary btn-sm ms-2"
                onClick={() => handleViewClick(obj.documents.adharCard)}
              >
                View
              </button>
            </li>
          )}

          {/* Pan Card */}
          {obj.documents?.panCard?.name && (
            <li className="list-group-item">
              <strong>Pan Card:</strong>
              <button
                className="btn btn-primary btn-sm ms-2"
                onClick={() => handleViewClick(obj.documents.panCard)}
              >
                View
              </button>
            </li>
          )}

          {/* Property Paper */}
          {obj.documents?.propertyPaper?.name && (
            <li className="list-group-item">
              <strong>Property Paper:</strong>
              <button
                className="btn btn-primary btn-sm ms-2"
                onClick={() => handleViewClick(obj.documents.propertyPaper)}
              >
                View
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Second card */}
      {showModal && currentDoc && (
        <div
          className="modal show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", zIndex: 5000 }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Document View</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Display document content */}
                <h6>{currentDoc.name}</h6>
                <img
                  src={`http://localhost:8080/${currentDoc.path.replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt={currentDoc.name}
                  className="img-fluid"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocRecord;
