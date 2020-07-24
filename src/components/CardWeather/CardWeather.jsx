
import React from 'react';

class CardWeather extends React.Component {

    componentDidMount() {

        const weatherURL =
            "https://api.openweathermap.org/data/2.5/forecast?q=Sevastopol&lang=ru&units=metric&APPID=1204ec86d11d969f5c14a0f8ec54ab6b"
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => console.log("Data List Loaded", data.list))

    }

    render() {
        return (
            <div>test2</div>
        );
    }
}

export default CardWeather;