import React, { useState } from "react";
import "./DocRecords.css";
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
    <div className="doc-card-background">
      {/* First card */}
      <div className="doc-info-sec">
        <p className="doc-info">
          <strong className="doc-q-text">Property Name:</strong>{" "}
          <p className="doc-info-data">{obj.title || "Not provided"}</p>
        </p>
        <p className="doc-info">
          <strong className="doc-q-text">Owner Name:</strong>{" "}
          <p className="doc-info-data">{obj.ownerName || "Not provided"}</p>
        </p>

        {/* Documents Section */}
        <strong className="doc-q-text doc-info">Documents:</strong>
        <div className="doc-ul">
          {/* Aadhar Card */}
          {obj.documents?.adharCard?.name && (
            <li className="doc-list doc-ac">
              <div>
                <strong>Aadhar Card:</strong>
              </div>
              <div>
                <button
                  className="doc-button"
                  onClick={() => handleViewClick(obj.documents.adharCard)}
                >
                  View
                </button>
              </div>
            </li>
          )}

          {/* Pan Card */}
          {obj.documents?.panCard?.name && (
            <li className="doc-list doc-pc">
              <div>
                <strong>Pan Card:</strong>
              </div>
              <div>
                <button
                  className="doc-button"
                  onClick={() => handleViewClick(obj.documents.panCard)}
                >
                  View
                </button>
              </div>
            </li>
          )}

          {/* Property Paper */}
          {obj.documents?.propertyPaper?.name && (
            <li className="doc-list doc-pp">
              <div>
                <strong>Property Paper:</strong>
              </div>
              <div>
                <button
                  className="doc-button"
                  onClick={() => handleViewClick(obj.documents.propertyPaper)}
                >
                  View
                </button>
              </div>
            </li>
          )}
        </div>
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
            <div className="modal-content   doc-view-card">
              <div className="modal-header doc-view-heading">
                <h5 className="modal-title doc-q-text doc-info-data">
                  Document View
                </h5>
                <button
                  type="button"
                  className="doc-x-button"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <i class="fa-solid fa-x"></i>
                </button>
              </div>
              <div className="modal-body">
                {/* Display document content */}
                <h6>{currentDoc.name}</h6>
                {console.log(currentDoc.path)}
                <img
                  src={`http://localhost:8080/${currentDoc.path}`}
                  alt={currentDoc.name}
                  className="img-fluid doc-view-img"
                />
              </div>
              <div className="modal-footer d-flex justify-content-around">
                <a href={`http://localhost:8080/${currentDoc.path}`} download>
                  <button className="btn btn-success">Download</button>
                </a>
                <button
                  type="button"
                  className="doc-button"
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
