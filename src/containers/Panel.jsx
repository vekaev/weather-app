import React from 'react';
import CityAutocomplete from './CityAutocomplete';
import { connect } from 'react-redux';
import styles from './Constainer.module.scss';
const Panel = () => {
  return (
    <div className={styles['panel']}>
      <CityAutocomplete />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather_data: state.weather_data,
  };
};
export default connect(mapStateToProps, null)(Panel);
