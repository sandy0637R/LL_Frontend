import React, { useEffect, useState } from "react";
import axios from "axios";
import ExploreList from "../../Components/expore-list/ExploreList";
import "./Explore.css";

const Explore = () => {
  const [dummyData, setDummyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch data from API
  const fetchRecordsApi = async () => {
    const token = localStorage.getItem("token"); // Retrieve JWT token
    try {
      const response = await axios.get(`https://land-lord.onrender.com/records/dummys`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const fetchedData = response.data;
      setDummyData(fetchedData);
      setFilteredData(fetchedData); // Initialize filtered data with all records
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  useEffect(() => {
    fetchRecordsApi();
  }, []);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredData(dummyData); // Display all records
    } else {
      const filtered = dummyData.filter(
        (rec) => rec.propertyType?.toLowerCase() === category.toLowerCase()
      );
      setFilteredData(filtered); // Filter based on propertyType
    }
  };

  return (
    <>
      <div className="category-filter">
        <button
          onClick={() => handleCategoryChange("All")}
          className="category-button category-button-first"
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange("Residential")}
          className="category-button"
        >
          Residential
        </button>
        <button
          onClick={() => handleCategoryChange("Agricultural")}
          className="category-button"
        >
          Agricultural
        </button>
        <button
          onClick={() => handleCategoryChange("Commercial")}
          className="category-button category-button-last "
        >
          Commercial
        </button>
      </div>

      <div className="property-card-container">
        {filteredData.length > 0 ? (
          filteredData.map((rec, index) => (
            <ExploreList rec={rec} key={index} />
          ))
        ) : (
          <p>No records found.</p>
        )}
      </div>
    </>
  );
};

export default Explore;
