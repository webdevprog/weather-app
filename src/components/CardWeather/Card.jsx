
import React from 'react';
import { Col } from 'react-bootstrap';

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

const Card = (props) => {
    const formatDate = /(\d{4})-(\d{1,2})-(\d{1,2})(.+)/gi,
        weekdayName = new Date(props.day.dt * 1000 - (3 * 60 * 60)).toLocaleString('ru', { weekday: 'long' }),
        icon = `http://openweathermap.org/img/wn/${props.day.weather[0].icon}.png`,
        directionWind = toTextualDescription(props.day.wind.deg);

    return (
        <Col lg="2">
            <div className="weather-card">
                <div className="weather-card__day">{weekdayName}</div>
                <div className="weather-card__full-date">{props.day.dt_txt.replace(formatDate, "$3 $2 $1")}</div>
                <div className="weather-card__time">{props.day.dt_txt.replace(formatDate, "$4")}</div>
                <div className="weather-card__type">{props.day.weather[0].description}</div>
                <div className="weather-card__wind-direction">{directionWind}</div>
                <div className="weather-card__wind-speed">{props.day.wind.speed}м/c</div>
                <img src={icon} alt={props.day.weather[0].description} />
            </div>
        </Col>
    );
}

export default Card;