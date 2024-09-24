import React, { useState } from 'react';
import CoordinateGenerator from './CoordinateGenerator';
import './HourlyForecasts.css';

function HourlyForecast() {
    // Internal state to handle the input fields
    // State to store latitude and longitude
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);



    // Fetch forecast data when the user clicks the "Get Forecast" button
    const handleFetchForecast = async () => {
        try {
            setError(null);
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
            );

            if (!response.ok) throw new Error("Failed to fetch data");

            const data = await response.json();
            setForecastData(data.hourly.temperature_2m); // Store the hourly temperature data
        } catch (error) {
            setError("Could not retrieve forecast. Please check your coordinates and try again.");
            setForecastData(null);
        }
    };

    return (
        <div id='hourly-forecast-container'>
            <h2 id="forecast-title">Hourly Temperature Forecast</h2>
            <input
                type="text"
                id="latitude-input"
                placeholder="Enter Latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
            />
            <input
                type="text"
                id="longitude-input"
                placeholder="Enter Longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
            />
            <button onClick={handleFetchForecast}>Get Forecast</button>
            <CoordinateGenerator setLatitude={setLatitude} setLongitude={setLongitude} />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {forecastData && (
                <div>
                    <h2>Hourly Temperatures</h2>
                    <table id="forecast-table">
                        <thead>
                            <tr>
                                <th>Hour</th>
                                <th>Temperature (°C)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forecastData.map((temp, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{temp}°C</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default HourlyForecast;
