import React from 'react';
import styles from './DateAndWeather.module.scss';

const DateAndWeather = ({ city, weather }) => {
  return (
    <div className={styles['info-block']}>
      {city ? (
        <>
          <p className={styles['temp']}>
            {weather ? (
              <>
                {Math.round(weather?.main?.temp)} <span>°C</span>
              </>
            ) : (
              ''
            )}
          </p>
          <h1>{city}</h1>
        </>
      ) : (
        <span className={styles['spinner']}></span>
      )}
    </div>
  );
};

export default DateAndWeather;
