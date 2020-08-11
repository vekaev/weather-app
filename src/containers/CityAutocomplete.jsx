import React, { useEffect } from 'react';
import axios from 'axios';
import { cityList } from '../cityList';
import { useHistory, useParams } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendRequest } from '../redux/actions/actions';

const CityAutocomplete = ({ seted_city, sendRequest }) => {
  const history = useHistory();
  let cityName = seted_city.split(',');
  const handleChange = (value) => {
    history.push(`/${value}`);
    sendRequest(value);
  };
  return (
    <Dropdown
      placeholder='Select a city'
      onChange={(e, { value }) => handleChange(value)}
      options={cityList}
      fluid
      search
      selection
      value={cityName[0]}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    seted_city: state.seted_city,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendRequest: (value) => dispatch(sendRequest(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityAutocomplete);
