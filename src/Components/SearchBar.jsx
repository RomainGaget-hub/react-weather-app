import { useState } from "react";

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
        <div>
            <h2>Search for a City</h2>
            <input type="text" value={city} onChange={handleInputChange} placeholder="Enter a city name" />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}