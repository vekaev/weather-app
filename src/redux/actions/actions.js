import { SET_SELECTED_CITY, SET_WEATHER_DATA } from './actionTypes';
import axios from 'axios';

export const setSelectedCity = (value) => {
  return {
    type: SET_SELECTED_CITY,
    payload: value,
  };
};
export const setWeatherData = (value) => {
  return {
    type: SET_WEATHER_DATA,
    payload: value,
  };
};

export const sendRequest = (value) => (dispatch) => {
  dispatch(
    setSelectedCity({
      seted_city: false,
    }),
  );
  dispatch(setWeatherData({ weather_data: null }));

  axios
    .get(
      typeof value == 'object'
        ? `http://api.openweathermap.org/data/2.5/weather?lat=${value?.lat}&lon=${value?.lon}&units=metric&appid=e70b3d12e10d1735e93d7770e126a258`
        : `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=e70b3d12e10d1735e93d7770e126a258`,
    )
    .then((res) => {
      setTimeout(() => {
        dispatch(
          setSelectedCity({
            seted_city: `${res.data.name}, ${res.data.sys.country}`,
          }),
        );
        dispatch(setWeatherData({ weather_data: res.data }));
      }, 500);
    })
    .catch((error) => {
      dispatch(
        setSelectedCity({
          seted_city: `Cann't get weather for ${value}`,
        }),
      );
      dispatch(setWeatherData({ weather_data: null }));
    });
};
