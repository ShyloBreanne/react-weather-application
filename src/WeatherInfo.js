import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="city-name">
                <h1>{props.data.city}</h1>
                <ul>
                    <li><FormattedDate date={props.data.date} /></li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
            </div>
            <div className="weather-icon">
                <WeatherIcon code={props.data.icon} size={80} />
                <WeatherTemperature fahrenheit={Math.round(props.data.temperature)} />
            </div>
            <div className="conditions">
                <ul>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {Math.round(props.data.wind)} MpH</li>
                </ul>
            </div>
        </div>
    );
}