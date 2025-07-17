import React, { useEffect, useState } from "react";
import "./Places.css"; // keep your existing CSS

export default function Places({ coord, condition }) {
  const [spots, setSpots] = useState([]);
  const API_KEY = "10772a2619ab4c7a8b7e260fea0284ac";

  const getTouristSpots = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.geoapify.com/v2/places?categories=tourism.sights&filter=circle:${lon},${lat},5000&limit=10&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setSpots(data.features || []);
    } catch (err) {
      console.error("Error fetching places:", err);
    }
  };

  useEffect(() => {
    if (condition && coord?.lat && coord?.lon) {
      getTouristSpots(coord.lat, coord.lon);
    }
  }, [condition, coord]);

  if (!condition || !coord?.lat || !coord?.lon) return null;

  return (
    <div className="PlacesBox">
      <h2>Nearby Tourist Attractions</h2>
      {spots.length === 0 ? (
        <p>Loading or no results found...</p>
      ) : (
        <ul>
          {[...new Map(
            spots
              .filter((spot) => spot.properties.name && spot.properties.place_id)
              .map((spot) => [spot.properties.place_id, spot])
          ).values()].map((spot) => (
            <li className="PlaceItem" key={spot.properties.place_id}>
              <strong>{spot.properties.name}</strong>
              <br />
              <span className="category-badge">
                {spot.properties.categories?.[0]?.split(".")[1]?.replace(/_/g, " ") ?? "Place"}
              </span>
              <br />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${spot.properties.lat},${spot.properties.lon}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
