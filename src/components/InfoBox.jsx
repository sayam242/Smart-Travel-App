import "../views/InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { useState } from "react";


const weatherIcons = {
  Sunny: "☀️",
  Rainy: "🌧️",
  Snowy: "❄️",
  Thunderstorm: "⛈️",
  Cloudy: "☁️",
  Foggy: "🌫️",
  Windy: "🌪️",
  Hot: "🔥",
  LightDrizzle: "🌦️",
  Unknown:"🌈",
};
const clothesSuggestions = {
  Sunny: "Wear light cotton clothes, sunglasses, and a hat. Stay hydrated!",
  Rainy: "Carry an umbrella or raincoat, and wear waterproof shoes.",
  Snowy: "Bundle up with a warm coat, gloves, boots, and a beanie.",
  Thunderstorm: "Avoid metal objects, wear full sleeves and stay indoors if possible.",
  Cloudy: "Light jacket or hoodie recommended. Weather may change.",
  Foggy: "Wear visible/reflective clothes and a warm layer.",
  Windy: "A windbreaker jacket and sturdy shoes are best.",
  Hot: "Loose cotton clothes, sunblock, and a water bottle are must-haves.",
  LightDrizzle: "A light waterproof jacket or hoodie should be enough.",
  Cold: "Wear thermal inner layers, wool sweaters, and insulated jackets.",
  Unknown: "Dress comfortably and check the weather updates before going out.",
};

const clothesImages = {
  Sunny: "/images/hot.png",
  Rainy: "/images/rain.png",
  Snowy: "/images/cold.png",
  Thunderstorm: "/images/avatar.png",
  Cloudy: "/images/avatar.png",
  Hot: "/images/hot.png",
  LightDrizzle: "/images/man.png",
  Unknown: "/images/man.png",
};


export default function InfoBox({info,condition}){



function getWeatherType({ temp, humidity, wind }) {
  // Thunderstorm ⛈️
  if (humidity > 70 && wind > 20 && temp >= 20) {
    return "Thunderstorm";
  }

  // Snowy ❄️
  if (temp < 20) {
    return "Snowy";
  }

  // Rainy 🌧️
  if (humidity > 80 && temp >= 15 && temp <= 25) {
    return "Rainy";
  }

  // Light Drizzle 🌦️
  if (temp >= 22 && temp <= 30 && humidity > 75 && humidity < 90) {
    return "LightDrizzle";
  }

  // Cloudy ☁️
  if (humidity > 65 && temp >= 20 && temp <= 30) {
    return "Cloudy";
  }

  // Hot 🔥
  if (temp > 35 && humidity < 50) {
    return "Hot";
  }

  // Sunny ☀️
  if (temp > 25 && humidity < 60) {
    return "Sunny";
  }

  // Unknown
  return "Unknown";
}


    return(
        <div className="InfoBox">
            
           {condition && (
  <div className="infoContainer">

    <div className="change" style={{
      
        // backgroundColor:"white",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "200px",
        // padding: "1rem",
        borderRadius: "12px",
        // width:
        
    }}>
      {(() => {
        const weatherType = getWeatherType({
          temp: info.temp,
          humidity: info.humidity,
          wind: info.wind
        });

        return (
          <>
           
            <div className="infoGrid">
                <div className="weatherInfo" style={{textAlign:"left", paddingTop:"20px"}}>
                     <Typography gutterBottom variant="h5" component="div" style={{paddingLeft:"0.5rem", paddingRight:"0.5rem"}}>
                    <b>
                        {info.city.charAt(0).toUpperCase() + info.city.slice(1)}{" "}
                        {weatherIcons[weatherType ?? unknown ]}
                    </b>
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" component={"span"} style={{  paddingLeft: "0.5rem",paddingRight: "0.5rem", borderRadius: "10px" }}>
                    <h1 style={{textAlign:"left",paddingLeft:"1rem"}}>{info.temp}°C</h1>
                    <div style={{display:"flex", justifyContent:"center"}}> 

                    <p style={{display:"flex", textAlign:"center"}}>Min: <br />{info.tempMin}°C</p>
                    <p style={{paddingLeft:"1rem",display:"flex",textAlign:"center"}}>Max: <br />{info.tempMax}°C</p>
                    <p style={{paddingLeft:"1rem",display:"flex",textAlign:"center"}}>Humidity: <br />{info.humidity}%</p>
                    <p style={{paddingLeft:"1rem",display:"flex",textAlign:"center"}}>wind: <br />{info.wind.speed}km/h {info.wind.deg}°</p>
                    </div>
                    </Typography>
                </div>

        <div className="clothesSuggestion" >
            <h3>Clothing Suggestion</h3>
            <p>{clothesSuggestions[weatherType]}</p>
            <img
                src={clothesImages[weatherType] || clothesImages["Unknown"]}
                alt="Clothing Suggestion"
                style={{ width: "100px", maxWidth: "250px", borderRadius: "10px" }}
                />
         
        </div>
    </div>

          </>
        );
      })()}
    </div>
  </div>
)}
       </div>
    )
}