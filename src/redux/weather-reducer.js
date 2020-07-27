const SET_WEATHER = 'SET-WEATHER';

let initialState = {
    weathers: [],
    isFetching: true
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            let timeNow = Math.floor(Date.now() / 1000) + (3 * 60 * 60),
                timeTomorrow = timeNow + (3 * 24 * 60 * 60),
                filterDataByTime = action.weatherItems.filter(item =>
                    item.dt >= timeNow && item.dt <= timeTomorrow && (/.+/gi).test(item.dt_txt)
                ),
                dataByDays = [],
                arrDays = [];

            filterDataByTime.forEach((item, index, items) => {
                const formatDate = /(\d{4})-(\d{1,2})-(\d{1,2})(.+)/gi;

                let nextItem,
                    currentDay = items[index].dt_txt.replace(formatDate, "$3-$2-$1");

                if (items.length - 1 === index) {
                    nextItem = items[index].dt_txt.replace(formatDate, "$3-$2-$1");
                } else {
                    nextItem = items[index + 1].dt_txt.replace(formatDate, "$3-$2-$1");
                }

                item.date = nextItem;
                item.weekDay = new Date(item.dt * 1000 - (3 * 60 * 60)).toLocaleString('ru', { weekday: 'long' });

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
            })
            console.log(dataByDays)
            return {
                ...state,
                weathers: [...dataByDays]
            };
        }
        default: {
            return state;
        }
    }
}

export let setWeather = (weatherItems) => ({ type: SET_WEATHER, weatherItems });

export default weatherReducer;