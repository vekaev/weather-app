import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import SelectedCity from './SelectedCity';
import { connect } from 'react-redux';
import CurrentCity from './CurrentCity';

const Main = ({ seted_city, weather_data }) => {
  return (
    <>
      <Route path={`/:topicId`}>
        <SelectedCity city={seted_city} weather={weather_data} />
      </Route>
      <Route exact path='/'>
        <CurrentCity city={seted_city} weather={weather_data} />
      </Route>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    seted_city: state.seted_city,
    weather_data: state.weather_data,
  };
};

export default connect(mapStateToProps, null)(Main);
