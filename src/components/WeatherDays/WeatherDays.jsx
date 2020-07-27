import React from 'react';
import { Row, Col } from 'react-bootstrap';
import WeatherCard from './WeatherCard/WeatherCard';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './style.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const WeatherDays = (props) => {
    return (
        <Row>
            <Col lg="12">
                <h1>{props.place}</h1>
            </Col>
            <Col lg="12">
                {
                    props.weathers.map((item, index) => (
                        <Row>
                            <Col lg="12">
                                <div className="weather-day__name">{item[index].weekDay}</div>
                                <div className="weather-day__date">{item[index].date}</div>
                            </Col>
                            <Col lg="12">
                                <Swiper
                                    spaceBetween={20}
                                    breakpoints={{
                                        560: { slidesPerView: 2 },
                                        768: { slidesPerView: 3 },
                                        992: { slidesPerView: 4 },
                                    }}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                    slidesPerView={1}
                                    className="weather-days-slider">
                                    {item.map((weather, index) => (
                                        <SwiperSlide className="weather-days-slider__slide"><WeatherCard item={weather} key={index} /></SwiperSlide>
                                    ))}
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                                </Swiper>
                            </Col>
                        </Row>))
                }
            </Col>
        </Row >
    );
}

export default WeatherDays;