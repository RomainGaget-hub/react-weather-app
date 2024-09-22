import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import WeatherApp from './Components/WeatherApp';
import HourlyForecast from './Components/HourlyForecast';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/forecast" element={<HourlyForecast />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;