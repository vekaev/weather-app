import React from 'react';
import styles from './AdditionalWeatherData.module.scss';

export const AdditionalWeatherData = ({ weather }) => {
  return (
    <>
      {weather && (
        <ul className={styles['list']}>
          <li className={styles['list__item']}>
            <p>
              Minimum temperature:
              <span>{weather?.main?.temp_min}°C</span>
            </p>
          </li>
          <li className={styles['list__item']}>
            <p>
              Maximum temperature:
              <span>{weather?.main?.temp_max}°C</span>
            </p>
          </li>
          <li className={styles['list__item']}>
            <p>
              Humidity:
              <span>{weather?.main?.humidity}%</span>
            </p>
          </li>
          <li className={styles['list__item']}>
            <p>
              Pressure:
              <span>{weather?.main?.pressure} p</span>
            </p>
          </li>
        </ul>
      )}
    </>
  );
};
