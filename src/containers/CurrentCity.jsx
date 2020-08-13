import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { sendRequest } from '../redux/actions/actions';
import DateAndWeather from '../components/DateAndWeather';

const CurrentCity = ({ seted_city, weather_data, sendRequest }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let newPosition = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      sendRequest(newPosition);
    });
  }, []);
  return (
    <div style={{ marginTop: 36 }}>
      <DateAndWeather city={seted_city} weather={weather_data} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    seted_city: state.seted_city,
    weather_data: state.weather_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendRequest: (value) => dispatch(sendRequest(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCity);
