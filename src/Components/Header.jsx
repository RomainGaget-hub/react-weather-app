import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Weather App</h1>
            <nav>
                <Link to="/">Current Weather</Link> | <Link to="/forecast">Hourly Forecast</Link>
            </nav>
        </header>
    );
}