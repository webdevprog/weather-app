
import React from 'react';
import Card from './Card';
import { Row, Col } from 'react-bootstrap';

class CardWeather extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            fetching: false
        };
    }

    componentDidMount() {
        const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Бахчисарай&lang=ru&units=metric&APPID=1204ec86d11d969f5c14a0f8ec54ab6b"
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                let timeNow = Math.floor(Date.now() / 1000) + (3 * 60 * 60),
                    timeTomorrow = timeNow + (5 * 24 * 60 * 60),
                    filterDataByTime = data.list.filter(item => 
                        item.dt >= timeNow && item.dt <= timeTomorrow && (/09|12|15|18|21/gi).test(item.dt_txt)
                    ),
                    dataByDays = [],
                    arrDays = [];

                filterDataByTime.forEach((item, index, items) => {
                    const formatDate = /(\d{4})-(\d{1,2})-(\d{1,2})(.+)/gi;

                    let nextItem,
                        currentDay = items[index].dt_txt.replace(formatDate, "$3$2$1");

                    if (items.length - 1 === index) {
                        nextItem = items[index].dt_txt.replace(formatDate, "$3$2$1");
                    } else {
                        nextItem = items[index + 1].dt_txt.replace(formatDate, "$3$2$1");
                    }

                    if (currentDay !== nextItem) {
                        arrDays.push(item);
                        arrDays.sort(function (a, b) {
                            return new Date(b.dt_txt) - new Date(a.dt_txt);
                        }).reverse();
                        dataByDays.push(arrDays);
                        arrDays = [];
                    } else {
                        arrDays.push(item);
                    }
                });

                this.setState({ data: dataByDays });
            });
    }

    render() {

        return (

            <Row>
                <Col lg="12">
                    test
                </Col>
                <Col lg="12">
                    {
                        this.state.data.map(item => <Row>{item.map((weather, index) => <Card day={weather} key={index} />)}</Row>)
                    }
                </Col>
            </Row>
        );
    }
}

export default CardWeather;