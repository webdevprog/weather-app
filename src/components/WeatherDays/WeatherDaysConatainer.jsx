
import React from 'react';
import { connect } from "react-redux";
import { setWeather } from "../../redux/weather-reducer"
import WeatherDays from './WeatherDays';
import Preloader from '../common/Preloader/Preloader';



class WeatherDaysConatainer extends React.Component {
    render() {
        return (
            <div className="weather-day">
                {this.props.isFetching  ?
                    <Preloader /> :
                    this.props.weathers.length ?
                        <WeatherDays weathers={this.props.weathers} place={this.props.place} />
                        : !this.props.place ? 'Введите в поле поиска город' : 'Такого места не найдено: ' + this.props.place
                }
            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        weathers: state.weatherPage.weathers,
        place: state.weatherPage.place,
        isFetching: state.weatherPage.isFetching
    }
}

export default connect(mapStateToProps, { setWeather })(WeatherDaysConatainer);