import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MapComponent = () => {
  const [locationInfo, setLocationInfo] = useState({
    additionalAddress: "",
    city: "",
    postcode: "",
  });

  useEffect(() => {
    const defaultLatLng = [19.7515, 75.7139]; // Default to Maharashtra coordinates
    let map, marker;

    if (!L.DomUtil.get("map")._leaflet_id) {
      // Initialize the map
      map = L.map("map").setView(defaultLatLng, 7); // Adjust zoom level for Maharashtra

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);

      // Add a draggable marker
      marker = L.marker(defaultLatLng, { draggable: true }).addTo(map);

      // Set initial input values
      document.getElementById("latitude").value = defaultLatLng[0];
      document.getElementById("longitude").value = defaultLatLng[1];

      // Fetch location info on marker drag
      marker.on("dragend", function () {
        const position = marker.getLatLng();
        updateInputsAndFetchInfo(position.lat, position.lng);
      });
    }

    // Function to update inputs and fetch location info
    const updateInputsAndFetchInfo = async (lat, lng) => {
      document.getElementById("latitude").value = lat.toFixed(6);
      document.getElementById("longitude").value = lng.toFixed(6);

      // Reverse geocoding to get address info
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const data = await response.json();

      setLocationInfo({
        additionalAddress: `${data.address?.road || ""}, ${data.address?.county || ""}, ${data.address?.state || ""}, ${data.address?.country || ""}`,
        city: data.address?.city || data.address?.town || data.address?.village || "N/A",
        postcode: data.address?.postcode || "N/A",
      });
    };

    // Update marker position when latitude and longitude are entered manually
    const handleInputChange = () => {
      const lat = parseFloat(document.getElementById("latitude").value);
      const lng = parseFloat(document.getElementById("longitude").value);

      if (!isNaN(lat) && !isNaN(lng)) {
        marker.setLatLng([lat, lng]);
        map.setView([lat, lng], map.getZoom());
        updateInputsAndFetchInfo(lat, lng);
      }
    };

    // Add Enter key handling
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleInputChange();
      }
    };

    document.getElementById("latitude").addEventListener("keydown", handleKeyPress);
    document.getElementById("longitude").addEventListener("keydown", handleKeyPress);
  }, []);

  // Handler for manual updates to locationInfo
  const handleManualInputChange = (e) => {
    const { name, value } = e.target;
    setLocationInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add Enter key handling for locationInfo fields
  const handleInfoKeyPress = (e) => {
    if (e.key === "Enter") {
      // Logic for handling additionalAddress, city, or postcode if needed
      console.log("Manual update submitted for:", e.target.name);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Interactive Map - Select Latitude and Longitude</h2>
      <div id="map" className="border mb-3" style={{ height: "400px", width: "100%" }}></div>
      <div className="row g-2">
        <div className="col-6">
          <label htmlFor="latitude" className="form-label">Latitude</label>
          <input
            type="text"
            id="latitude"
            className="form-control"
            placeholder="Latitude"
            name="latitude"
          />
        </div>
        <div className="col-6">
          <label htmlFor="longitude" className="form-label">Longitude</label>
          <input
            type="text"
            id="longitude"
            className="form-control"
            placeholder="Longitude"
            name="longitude"
          />
        </div>
      </div>
      <div className="mt-4">
        <h4>Location Information:</h4>
        <div className="row g-2">
          <div className="col-12">
            <label htmlFor="additionalAddress" className="form-label">Address</label>
            <input
              type="text"
              id="additionalAddress"
              className="form-control"
              name="additionalAddress"
              placeholder="Address"
              value={locationInfo.additionalAddress}
              onChange={handleManualInputChange}
              onKeyDown={handleInfoKeyPress}
            />
          </div>
          <div className="col-6">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              id="city"
              className="form-control"
              name="city"
              placeholder="City"
              value={locationInfo.city}
              onChange={handleManualInputChange}
              onKeyDown={handleInfoKeyPress}
            />
          </div>
          <div className="col-6">
            <label htmlFor="postcode" className="form-label">Postcode</label>
            <input
              type="text"
              id="postcode"
              className="form-control"
              name="postcode"
              placeholder="Postcode"
              value={locationInfo.postcode}
              onChange={handleManualInputChange}
              onKeyDown={handleInfoKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
