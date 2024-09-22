import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Weather App</h1>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Current Weather</Link></li>
                    <li className="nav-item"><Link to="/forecast">Hourly Forecast</Link></li>
                </ul>
            </nav>
        </header>
    );
}