import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
function maximumTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    if (props.unit === "celsius") {
        temperature = Math.round((temperature - 32) / 1.8);
    }
    return `${temperature}°`;
}

function minimumTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    if (props.unit === "celsius") {
        temperature = Math.round((temperature - 32) / 1.8);
    }
    return `${temperature}°`;
}

function day() {
    let date = new Date(props.data.time * 1000);
    let day =date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];

    return days[day];
}

    return (
        <div>
         <div className="WeatherForecast-day">
                        {day()}
                        </div>
                        <WeatherIcon code={props.data.condition.icon} size={38}/>
                        <div className="WeatherForecast-temperatures">
                            <span className="WeatherForecast-temperature-max">
                                {maximumTemperature()}
                                </span> 
                            <span className="WeatherForecast-temperature-min">
                                {minimumTemperature()}
                                </span>
                        </div>
                        </div>
    );
}