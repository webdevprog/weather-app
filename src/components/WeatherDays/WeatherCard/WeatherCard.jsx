
import React from 'react';
import './style.scss';

function toTextualDescription(degree) {
    if (degree > 337.5) return 'C';
    if (degree > 292.5) return 'CЗ';
    if (degree > 247.5) return 'З';
    if (degree > 202.5) return 'ЮЗ';
    if (degree > 157.5) return 'Ю';
    if (degree > 122.5) return 'ЮВ';
    if (degree > 67.5) return 'В';
    if (degree > 22.5) { return 'СВ'; }
    return 'С';
}

const WeatherCard = (props) => {
    const formatDate = /(\d{4})-(\d{1,2})-(\d{1,2})(.+)/gi;
        let icon = `http://openweathermap.org/img/wn/${props.item.weather[0].icon}@2x.png`,
        directionWind = toTextualDescription(props.item.wind.deg);

    return (
        <div className="weather-card">
            <div className="weather-card__time">{props.item.dt_txt.replace(formatDate, "$4")}</div>
            <div className="weather-card__temp">{Math.floor(props.item.main.temp)} C</div>
            <img className="weather-card__image" src={icon} alt={props.item.weather[0].description} />
            <div className="weather-card__type">{props.item.weather[0].description}</div>
            <div className="weather-card__wind-direction">{directionWind}</div>
            <div className="weather-card__wind-speed">{props.item.wind.speed}м/c</div>
            
        </div>
    );
}

export default WeatherCard;