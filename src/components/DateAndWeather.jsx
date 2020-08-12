import React from 'react';

const DateAndWeather = ({city, weather}) => {
    return(
        <>
            <h1>{city}</h1>
            <p>{weather && 'No data for this place'}</p>
        </>
    )
};

export default React.memo(DateAndWeather)