
import React from 'react';
import Card from './Card';
import { Row, Col } from 'react-bootstrap';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


class CardWeather extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            place: 'Керчь',
            titlePlace: '',
            fetching: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSumbite = this.handleSumbite.bind(this);
    }

    componentDidMount() {
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.place}&lang=ru&у&APPID=1204ec86d11d969f5c14a0f8ec54ab6b`
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                let timeNow = Math.floor(Date.now() / 1000) + (3 * 60 * 60),
                    timeTomorrow = timeNow + (2 * 24 * 60 * 60),
                    filterDataByTime = data.list.filter(item =>
                        item.dt >= timeNow && item.dt <= timeTomorrow && (/.+/gi).test(item.dt_txt)
                    ),
                    dataByDays = [],
                    arrDays = [];

                filterDataByTime.forEach((item, index, items) => {
                    const formatDate = /(\d{4})-(\d{1,2})-(\d{1,2})(.+)/gi;

                    let nextItem,
                        currentDay = items[index].dt_txt.replace(formatDate, "$3 $2 $1");

                    if (items.length - 1 === index) {
                        nextItem = items[index].dt_txt.replace(formatDate, "$3 $2 $1");
                    } else {
                        nextItem = items[index + 1].dt_txt.replace(formatDate, "$3 $2 $1");
                    }
                    item.date = nextItem;
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
                    console.log(item);
                });

                this.setState({ data: dataByDays });
            });
    }

    handleSumbite (e) {
        e.preventDefault();
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.place}&lang=ru&units=metric&APPID=1204ec86d11d969f5c14a0f8ec54ab6b`
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                let timeNow = Math.floor(Date.now() / 1000) + (3 * 60 * 60),
                    timeTomorrow = timeNow + (3 * 24 * 60 * 60),
                    filterDataByTime = data.list.filter(item =>
                        item.dt >= timeNow && item.dt <= timeTomorrow && (/.+/gi).test(item.dt_txt)
                    ),
                    dataByDays = [],
                    arrDays = [];

                filterDataByTime.forEach((item, index, items) => {
                    const formatDate = /(\d{4})-(\d{1,2})-(\d{1,2})(.+)/gi;

                    let nextItem,
                        currentDay = items[index].dt_txt.replace(formatDate, "$3 $2 $1");

                    if (items.length - 1 === index) {
                        nextItem = items[index].dt_txt.replace(formatDate, "$3 $2 $1");
                    } else {
                        nextItem = items[index + 1].dt_txt.replace(formatDate, "$3 $2 $1");
                    }
                    item.date = nextItem;
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

    handleChange (e) {
        this.setState({place: e.target.value})
    }

    render() {

        return (

            <Row>
                <Col lg="12">
                    <form action="" onSubmit={this.handleSumbite}>
                        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.place}/>
                    </form>
                </Col>
                <Col lg="12"><h1>{this.state.place}</h1></Col>
                <Col lg="12">
                    {
                        this.state.data.map((item, index) => (
                            <Row>
                                <Col lg="6">{new Date(item[index].dt * 1000 - (3 * 60 * 60)).toLocaleString('ru', { weekday: 'long' })}</Col>
                                <Col lg="6">{item[index].date}</Col>
                                <Swiper spaceBetween={50} slidesPerView={4} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                                    {item.map((weather, index) => (
                                        <SwiperSlide><Card day={weather} key={index} /></SwiperSlide>
                                    ))}
                                </Swiper>
                            </Row>))
                    }
                </Col>
            </Row>
        );
    }
}

export default CardWeather;