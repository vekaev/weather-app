import React from 'react';
import CityAutocomplete from './CityAutocomplete';
import { connect } from 'react-redux';
import styles from './Container.module.scss';
import { AdditionalWeatherData } from '../components/AdditionalWeatherData';
const Panel = ({ weather_data }) => {
  return (
    <div className={styles['panel']}>
      <CityAutocomplete />
      <AdditionalWeatherData weather={weather_data} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather_data: state.weather_data,
  };
};
export default connect(mapStateToProps, null)(Panel);
