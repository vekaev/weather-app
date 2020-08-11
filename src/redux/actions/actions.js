import { SET_SELECTED_CITY, SET_WEATHER_DATA } from './actionTypes';
import axios from 'axios';

export const setSelectedCity = (value) => {
  return {
    type: SET_SELECTED_CITY,
    playload: value,
  };
};
export const setWeatherData = (value) => {
  return {
    type: SET_WEATHER_DATA,
    playload: value,
  };
};

export const sendRequest = (value) => (dispatch) => {
  axios
    .get(
      typeof value == 'object'
        ? `http://api.openweathermap.org/data/2.5/weather?lat=${value?.lat}&lon=${value?.lon}&units=metric&appid=e70b3d12e10d1735e93d7770e126a258`
        : `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=e70b3d12e10d1735e93d7770e126a258`,
    )
    .then((res) => {
      dispatch(
        setSelectedCity({
          seted_city: `${res.data.name}, ${res.data.sys.country}`,
        }),
      );
      dispatch(setWeatherData({ weather_data: res }));
    })
    .catch((error) => {
      console.log(error);
    });
};
