import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { sendRequest } from '../redux/actions/actions';

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
  console.log(weather_data);
  return (
    <>
      <h1>{seted_city}</h1>
      <p>{weather_data && 'No data for this place'}</p>
    </>
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
