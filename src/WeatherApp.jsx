import {useState} from "react";
import InfoBox from "./components/InfoBox.jsx";
import SearchBox from "./components/SearchBox.jsx";
import Places from "./components/Places.jsx";
import "./views/WeatherApp.css"
export default function WeatherApp(){
        const [weather,setWeather]=useState({
            
        })
        let [condition,setCondition]=useState(false);
        let updateInfo=(newInfo)=>{
            setCondition(true);
            setWeather(newInfo);
        }
    return (
        <div className="WeatherApp">
            <b><h1>Smart Travel App</h1></b>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weather} condition={condition}/>
            
            <Places coord={weather.coord} condition={condition}/>


        </div>
    )
}