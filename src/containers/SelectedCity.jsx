import { Link, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { sendRequest } from '../redux/actions/actions';
import DateAndWeather from '../components/DateAndWeather';
import { Button, Icon } from 'semantic-ui-react';

const SelectedCity = ({ seted_city, weather_data, sendRequest }) => {
  let { topicId } = useParams();

  useEffect(() => {
    sendRequest(topicId);
  }, [topicId]);

  return (
    <>
      <DateAndWeather city={seted_city} weather={weather_data} />
      <Link to={'/'}>
        <Button inverted icon labelPosition='left'>
          Current weather
          <Icon name='left arrow' />
        </Button>
      </Link>
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
