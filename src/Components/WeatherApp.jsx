import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
                setError(null);
            } else {
                setError('City not found');
            }
        } catch (error) {
            setError('Failed to fetch data  from the server');
        }
    }
    return (
        <div>
            <SearchBar onSearch={fetchWeatherData} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weatherData && <WeatherDisplay data={weatherData} />}
        </div>
    );
}