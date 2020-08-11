import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { sendRequest } from '../redux/actions/actions';

const CurrentCity = ({ city, weather, sendRequest }) => {
  const [position, setPosition] = useState({});

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
    <>
      <h1>{city}</h1>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendRequest: (value) => dispatch(sendRequest(value)),
  };
};

export default connect(null, mapDispatchToProps)(CurrentCity);
