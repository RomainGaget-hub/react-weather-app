import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar'
import WeatherDisplay from './WeatherDisplay';
import './WeatherApp.css';

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
        <div className='weather-app-container'>
            <div className='search-section'>
                <SearchBar onSearch={fetchWeatherData} />
            </div>
            <div className='error-section'>
                {error && <p className='error-message'>{error}</p>}
            </div>
            {weatherData && (
                <div className='weather-display-section'>
                    <WeatherDisplay data={weatherData} />
                </div>
            )}
        </div>
    );
}