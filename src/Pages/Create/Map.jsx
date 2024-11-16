import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    const defaultLatLng = [19.7515, 75.7139]; // Default to Maharashtra coordinates

    if (!L.DomUtil.get("map")._leaflet_id) {
      // Initialize the map
      const map = L.map("map").setView(defaultLatLng, 7); // Adjust zoom level for Maharashtra

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);

      // Add a draggable marker
      const marker = L.marker(defaultLatLng, { draggable: true }).addTo(map);

      // Set initial input values
      document.getElementById("latitude").value = defaultLatLng[0];
      document.getElementById("longitude").value = defaultLatLng[1];

      // Update the inputs when the marker is dragged
      marker.on("dragend", function () {
        const position = marker.getLatLng();
        document.getElementById("latitude").value = position.lat.toFixed(6);
        document.getElementById("longitude").value = position.lng.toFixed(6);
      });
    }
  }, []);

  return (
    <div>
      <h2>Interactive Map - Select Latitude and Longitude</h2>
      <div
        id="map"
        style={{ height: "400px", width: "100%", marginBottom: "20px" }}
      ></div>
      <input
        type="text"
        id="latitude"
        placeholder="Latitude"
        name="latitude"
        readOnly
        style={{
          margin: "5px",
          padding: "8px",
          width: "calc(50% - 16px)",
          fontSize: "14px",
        }}
      />
      <input
        type="text"
        id="longitude"
        placeholder="Longitude"
        name="longitude"
        readOnly
        style={{
          margin: "5px",
          padding: "8px",
          width: "calc(50% - 16px)",
          fontSize: "14px",
        }}
      />
    </div>
  );
};

export default MapComponent;
