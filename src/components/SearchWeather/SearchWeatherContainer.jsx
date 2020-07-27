
import React from 'react';
import { connect } from "react-redux";
import * as axios from "axios";
import { setWeather, updatePlace, setPlace, toggleFetching } from "../../redux/weather-reducer";
import SearchWeather from "./SearchWeather";


class WeatherDaysConatainer extends React.Component {

    onSearch = (e) => {
        e.preventDefault();
        this.props.toggleFetching(false);
        this.props.setPlace(this.props.searchPlace);
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.searchPlace}&lang=ru&units=metric&APPID=1204ec86d11d969f5c14a0f8ec54ab6b`)
            .then(response => {
                this.props.toggleFetching(true);
                this.props.setWeather(response.data.list);
            }).catch(() => {
                this.props.toggleFetching(true);
                this.props.setWeather([]);
            })
    }

    onChange = (e) => {
        this.props.updatePlace(e.target.value);
    }


    render() {
        return (<SearchWeather onSearch={this.onSearch} onChange={this.onChange} searchTitle={this.props.searchPlace} />);
    }
}

let mapStateToProps = (state) => {
    return {
        searchPlace: state.weatherPage.searchPlace,
        place: state.weatherPage.place,
        isFetching: state.weatherPage.isFetching
    }
}

export default connect(mapStateToProps, { setWeather, updatePlace, setPlace, toggleFetching })(WeatherDaysConatainer);