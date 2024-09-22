function WeatherDisplay({ data }) {
    return (
        <div>
            <h2>Weather Information</h2>
            <p><strong>City:</strong> {data.name}</p>
            <p><strong>Temperature:</strong> {data.main.temp} °C</p>
            <p><strong>Condition:</strong> {data.weather[0].description}</p>
            <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
            />
        </div>
    );
}
export default WeatherDisplay;
