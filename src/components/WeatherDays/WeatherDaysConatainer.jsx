
import React from 'react';
import WeatherCard from './WeatherCard/WeatherCard';
import { Row, Col } from 'react-bootstrap';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { connect } from "react-redux"
import * as axios from "axios"
import { setWeather } from "../../redux/weather-reducer"

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './style.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


class WeatherDaysConatainer extends React.Component {

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Севастополь&lang=ru&units=metric&APPID=1204ec86d11d969f5c14a0f8ec54ab6b`)
            .then(response => {
                //this.props.toggleFetching(true);
                this.props.setWeather(response.data.list);
            });
    }


    render() {
        return (
            <div>
                {
                    this.props.weathers.map((item, index) => (
                        <Row className="weather-day">
                            <Col lg="12">
                                <div className="weather-day__name">{item[index].weekDay}</div>
                                <div className="weather-day__date">{item[index].date}</div>
                            </Col>
                            <Col lg="12">
                                <Swiper spaceBetween={20} slidesPerView={4} className="weather-days-slider">
                                    {item.map((weather, index) => (
                                        <SwiperSlide className="weather-days-slider__slide"><WeatherCard item={weather} key={index} /></SwiperSlide>
                                    ))}
                                </Swiper>
                            </Col>
                        </Row>))
                }
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        weathers: state.weatherPage.weathers,
        isFetching: state.weatherPage.isFetching
    }
}

export default connect(mapStateToProps, { setWeather })(WeatherDaysConatainer);