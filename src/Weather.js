import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>Portland</h1>
            <ul>
                <li>Thursday 12:00</li>
                <li>Overcast Clouds</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <img src="https://cdn.search.brave.com/serp/v1/static/icons/weather-dark/e1f6d947ee406caa50fde54fbad768c0eb5450afb70516af84834a7e3b93c633-04d.svg" alt="Overcast Clouds" />
                    <span className="temperature">80</span>
                    <span className="unit">°F</span>
                    </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: 78%</li>
                        <li>Precipitation: 90%</li>
                        <li>Wind: 1.28 MpH</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}