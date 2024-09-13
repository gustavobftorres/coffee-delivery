import { useState, useEffect } from "react";
import { LocationButton } from "./styles";
import locationPin from "../../assets/location-pin.svg";

export function LocationComponent() {
  const [location, setLocation] = useState({ city: "", state: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedLocation = localStorage.getItem("location");

    if (savedLocation) {
      // If location is saved in localStorage, use it
      setLocation(JSON.parse(savedLocation));
    } else {
      // Otherwise, fetch the location
      async function fetchLocation() {
        try {
          const locationData = await getCityAndState();
          setLocation(locationData);
          localStorage.setItem("location", JSON.stringify(locationData)); // Save location to localStorage
        } catch (err) {
          setError(err.message);
        }
      }

      fetchLocation();
    }
  }, []); // Empty dependency array ensures it runs only once

  return (
    <LocationButton>
      {error ? (
        <p>Error getting location: {error}</p>
      ) : (
        <>
          <img src={locationPin} />
          <p>
            {location.city}, {location.state}
          </p>
        </>
      )}
    </LocationButton>
  );
}

// Helper function for fetching the user's city and state
async function getCityAndState() {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();

  return {
    city: data.city,
    state: data.region,
  };
}
