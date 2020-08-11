import React from 'react';
import CityAutocomplete from './CityAutocomplete';
import { connect } from 'react-redux';

const Panel = () => {
  return <CityAutocomplete />;
};

const mapStateToProps = (state) => {
  return {
    weather_data: state.weather_data,
  };
};
export default connect(mapStateToProps, null)(Panel);
