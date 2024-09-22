import { useState } from "react";
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');

    const handleInputChange = (event) => {
        setCity(event.target.value);
    }

    const handleSearch = () => {
        console.log('Search button clicked');
        if (city.trim !== '') {
            onSearch(city);
            setCity('');
        }
    }

    return (
        <div className="search-bar">
            <h2 className="search-heading">Search for a City</h2>
            <div className="search-controls">
                <input 
                    type="text" 
                    value={city} 
                    onChange={handleInputChange} 
                    placeholder="Enter a city name" 
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
        </div>
    );
}