import React from "react";
import WeatherIcon from "./weatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast(){
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
let apiKey="e2e5f0664e14425e87abaae94f48d5e8";
let longitude=props.coordinates.lon;
let latitude=props.coordinates.lat;
axios.get(apiUrl).then(handleResponse);

function handleResponse(response){
console.log(response.data);
}
    
return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
        <div className="weatherForecast-day">Thu</div>
        <WeatherIcon code="01d" size={36}/>
        <span className="WeatherForecast-temperature-max">19°</span>
        <span className="WeatherForecast-temperature-min">10°</span>
      </div>

  </div>
  </div>
);
    
}