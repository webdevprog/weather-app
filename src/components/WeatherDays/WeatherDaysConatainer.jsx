
import React from 'react';
import { connect } from "react-redux";
import { setWeather } from "../../redux/weather-reducer"
import WeatherDays from './WeatherDays';



class WeatherDaysConatainer extends React.Component {
    render() {
        return (
            <>
                {this.props.weathers.length ?
                    <WeatherDays weathers={this.props.weathers} place={this.props.place} />
                    : 'Такого места не найдено: ' + this.props.place
                }
            </>

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