
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import WeatherDisplay from './Components/WeatherDisplay';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <WeatherDisplay />
    </div>
  );
}

export default App;
