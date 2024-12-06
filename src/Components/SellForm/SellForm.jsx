import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SellForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: null,
    contactNo: "",
    address: "",
    postCode: "",
    city: "",
    propertyType: "",
    ownerName: "",
    confirmSell: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Append form data fields
    for (const key in formData) {
      if (key === "image" && formData[key]) {
        formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    // Retrieve email from localStorage and append it
    const email = localStorage.getItem("email");
    if (email) {
      formDataToSend.append("email", email);
    } else {
      alert("Email not found in localStorage");
      return;
    }

    try {
      const token = localStorage.getItem("token"); 
      const response = await axios.post(
        "http://localhost:8080/records/sell",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      if (response.status === 200) {
        alert("Record Created successfully");
        console.log("Form submitted", formData)
        setTimeout(() => {
          navigate("/sell");
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div>
      <h2>Sell Your Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Property Image:
            <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
          </label>
        </div>
        <div>
          <label>
            Contact Number:
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Post Code:
            <input
              type="text"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Property Type:
            <input
              type="text"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Owner Name:
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="confirmSell"
              checked={formData.confirmSell}
              onChange={handleChange}
              required
            />
            Are you sure you want to sell this property?
          </label>
        </div>
        <button type="submit" disabled={!formData.confirmSell}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellForm;
