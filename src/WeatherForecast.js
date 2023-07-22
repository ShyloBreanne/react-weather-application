import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);

        console.log(response);
    }
    
    if (loaded) {
        console.log(forecast);
        return  (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day">Thu</div>
                        <WeatherIcon code="mist-night" size={38}/>
                        <div className="WeatherForecast-temperatures">
                            <span className="WeatherForecast-temperature-max">°</span> 
                            <span className="WeatherForecast-temperature-min">10°</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
    let apiKey = "0f394coc58tc83ab43c50095f3bd3ad9";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
    }
}