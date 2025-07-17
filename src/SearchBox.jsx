import "./SearchBox.css";
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "76dd43d0a3a8561405d8529704451548";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();
      setError("");

      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        wind: jsonResponse.wind,
        coord: jsonResponse.coord,
      };
      return result;
    } catch (err) {
      setError("true");
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCity("");
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (_) {
      // Error already set
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit} className="SearchForm">
       <OutlinedInput
  placeholder="Enter city name"
  id="city"
  required
  value={city}
  onChange={handleChange}
  className="CityInput"
  sx={{
    height: '50px',
    fontSize: '0.9rem',
    px: '12px',
    py: '0',
    borderRadius: '8px',
    backgroundColor: '#e7f0ff', // match your container's exact color
    '& input': {
      padding: 0,
      height: '50px',
      lineHeight: '50px',
    },
    '& fieldset': {
      borderColor: '#e7f0ff',     // match bg color to "hide" border
      borderWidth: '1px',
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      borderColor: '#e7f0ff',     // same on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#90caf9',     // subtle blue focus if needed
    },
  }}
/>

        <Button style={{backgroundColor:"#14b8cd", color:"black"}} variant="contained" type="submit" className="SearchButton">
          Search
        </Button>
      </form>
      {error && <p className="ErrorText">No Such Place Exists</p>}
    </div>
  );
}
