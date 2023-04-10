import { ParameterRow } from "./parameter-row";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  const weatherData = [
    {
      label: "Feels like",
      value: `${Math.round(data.main.temp)}°C`,
    },
    {
      label: "Wind",
      value: `${data.wind.speed} m/s`,
    },
    {
      label: "Humidity",
      value: `${data.main.humidity} %`,
    },
    {
      label: "Pressure",
      value: `${data.main.pressure} hPa`,
    },
  ];

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desctiption">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          {weatherData.map(({ label, value }) => (
            <ParameterRow label={label} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
