import { Link, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { sendRequest } from '../redux/actions/actions';
import DateAndWeather from '../components/DateAndWeather';

const SelectedCity = ({ seted_city, weather_data, sendRequest }) => {
  let { topicId } = useParams();

  useEffect(() => {
    sendRequest(topicId);
  }, [topicId]);

  return (
    <>
      <DateAndWeather city={seted_city} weather={weather_data} />
      <Link to={'/'}>Back</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCity);
