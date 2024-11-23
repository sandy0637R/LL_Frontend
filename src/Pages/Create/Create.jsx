import { useState } from "react";
import MapComponent from "./Map";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../../utils/Utils";

function Create() {
  const [isLoan, setIsLoan] = useState(false);
  const [hasNominee, setHasNominee] = useState(false);
const navigate=useNavigate()
  const handleSubmit = async (event) => {
event.preventDefault()
    const formData = new FormData(event.target);

    try {
      const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage
    
      const response = await axios.post(
        "http://localhost:8080/records",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensures proper handling of file uploads
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        }
      );
    
      console.log("Response:", response.data);

    } catch (error) {
      console.error("Error submitting form:", error);
    }
    handleSuccess('Record Created successfully')
    setTimeout(()=>{
      navigate('/home')

    },1000)
  };

  return (
    <div className="container p-5">
      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Map Component */}
        <div className="col-12">
          <label htmlFor="map" className="form-label">
            Map
          </label>
          <MapComponent />
        </div>

        {/* Property Title */}
        <div className="col-md-6">
          <label htmlFor="propertyTitle" className="form-label">
            Name of Property
          </label>
          <input
            type="text"
            className="form-control"
            id="propertyTitle"
            placeholder="Enter the Title"
            name="title"
            required
          />
        </div>

        {/* Property Type */}
        <div className="col-md-6">
          <label htmlFor="propertyType" className="form-label">
            Property Type
          </label>
          <select
            className="form-select"
            id="propertyType"
            name="propertyType"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select Property Type
            </option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Agricultural">Agricultural</option>
          </select>
        </div>

        {/* Owner Name */}
        <div className="col-md-6">
          <label htmlFor="ownerName" className="form-label">
            Owner Name
          </label>
          <input
            type="text"
            className="form-control"
            id="ownerName"
            placeholder="Enter Owner Name"
            name="ownerName"
            required
          />
        </div>

        {/* Date of Property Purchase */}
        <div className="col-md-6">
          <label htmlFor="purchaseDate" className="form-label">
            Date of Property Purchase
          </label>
          <input
            type="date"
            className="form-control"
            id="purchaseDate"
            name="purchaseDate"
            required
          />
        </div>

        {/* Purchased on Loan */}
        <div className="col-md-12">
          <label htmlFor="loan" className="form-label">
            Was the property purchased on a loan?
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="loan"
              id="loanYes"
              value="yes"
              onChange={() => setIsLoan(true)}
              required
            />
            <label className="form-check-label" htmlFor="loanYes">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="loan"
              id="loanNo"
              value="no"
              onChange={() => setIsLoan(false)}
              required
            />
            <label className="form-check-label" htmlFor="loanNo">
              No
            </label>
          </div>
        </div>

        {isLoan && (
          <>
            <div className="col-md-6">
              <label htmlFor="totalPaid" className="form-label">
                Total Amount Paid
              </label>
              <input
                type="number"
                className="form-control"
                id="totalPaid"
                placeholder="Enter the Total Paid Amount"
                name="totalPaid"
                required
                min="0"
              />
            </div>

            {/* Total Amount to Be Paid */}
            <div className="col-md-6">
              <label htmlFor="totalToBePaid" className="form-label">
                Total Amount to Be Paid
              </label>
              <input
                type="number"
                className="form-control"
                id="totalToBePaid"
                placeholder="Enter the Total Amount"
                name="totalToBePaid"
                required
                min="0"
              />
            </div>
          </>
        )}

        {/* Nominee Details */}
        <div className="col-md-12">
          <label htmlFor="nominee" className="form-label">
            Is there a nominee for this property?
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="nominee"
              id="nomineeYes"
              value="yes"
              onChange={() => setHasNominee(true)}
              required
            />
            <label className="form-check-label" htmlFor="nomineeYes">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="nominee"
              id="nomineeNo"
              value="no"
              onChange={() => setHasNominee(false)}
              required
            />
            <label className="form-check-label" htmlFor="nomineeNo">
              No
            </label>
          </div>
        </div>

        {/* Nominee Details (Conditional) */}
        {hasNominee && (
          <>
            <div className="col-md-6">
              <label htmlFor="nomineeName" className="form-label">
                Nominee Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nomineeName"
                placeholder="Enter Nominee Name"
                name="nomineeName"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="nomineeDOB" className="form-label">
                Nominee Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="nomineeDOB"
                name="nomineeDOB"
                required
              />
            </div>
          </>
        )}

        {/* File Upload */}
        <div className="col-md-12">
          <label
            htmlFor="documents"
            className="form-label fs-5 text-center w-100"
          >
            Upload Required Documents
          </label>
          <label htmlFor="">
            Property Papers{" "}
            <small className="text-danger ">(max size: 5mb)</small>
          </label>
          <input
            type="file"
            className="form-control"
            id="documents"
            name="avatar"
            required
          />{" "}
          <br />
          <label htmlFor="">
            Aadhar Card{" "}
            <small className="text-danger ">(max size: 500kb)</small>
          </label>
          <input
            type="file"
            className="form-control"
            id="documents"
            name="avatar"
            required
          />{" "}
          <br />
          <label>
            Pan Card <small className="text-danger ">(max size: 500kb)</small>
          </label>
          <input
            type="file"
            className="form-control"
            id="documents"
            name="avatar"
            required
          />
        </div>

        {/* Terms and Conditions */}
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              name="terms"
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I have read the Terms and Conditions
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary cursor-pointer">
            Save
          </button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default Create;