import React from 'react';
import styles from './DateAndWeather.module.scss';

const DateAndWeather = ({ city, weather }) => {
  return (
    <div className={styles['info-block']}>
      <h1>{city}</h1>
      {weather ? (
        <p className={styles['temp']}>
          {Math.round(weather?.main?.temp)} <span>&#8451;</span>
        </p>
      ) : (
        <p className={styles['error']}>No data for this place</p>
      )}
    </div>
  );
};

export default DateAndWeather;
