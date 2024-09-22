import React, { useState } from 'react';

function CoordinateGenerator({ setLatitude, setLongitude }) {
    const [locationName, setLocationName] = useState("");

    // Function to generate random coordinates
    const generateCoordinates = async () => {
        const randomLatitude = (Math.random() * 180 - 90).toFixed(6); // Generates between -90 and +90
        const randomLongitude = (Math.random() * 360 - 180).toFixed(6); // Generates between -180 and +180

        // Update parent component's state
        setLatitude(randomLatitude);
        setLongitude(randomLongitude);

        // Fetch location name based on generated coordinates
        fetchLocationName(randomLatitude, randomLongitude);
    };

    // Function to call the OpenCage API for reverse geocoding
    const fetchLocationName = async (latitude, longitude) => {
        try {
            const apiKey = process.env.REACT_APP_OPENCAGE_API_KEY;
            const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
            );

            if (!response.ok) throw new Error("Failed to fetch location");

            const data = await response.json();
            if (data.results.length > 0) {
                setLocationName(data.results[0].formatted); // Get the formatted address
            } else {
                setLocationName("Unknown Location");
            }
        } catch (error) {
            setLocationName("Failed to retrieve location");
            console.error("Error fetching location:", error);
        }
    };

    return (
        <div>
            <h3>Coordinate Generator</h3>
            <button onClick={generateCoordinates}>Generate Random Coordinates</button>
            {locationName && <p>Location: {locationName}</p>}
        </div>
    );
}

export default CoordinateGenerator;
