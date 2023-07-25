import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    const [unit, setUnit] = useState("fahrenheit");

    useEffect(() => {
        setLoaded(false);
        let apiKey = "0f394coc58tc83ab43c50095f3bd3ad9";
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

        axios.get(apiUrl).then(handleResponse);
        }, [props.coordinates, unit]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
    
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 6 ) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} unit={unit} showCelsius={showCelsius} showFahrenheit={showFahrenheit} />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        );
    } else {
        return null;
    }
}