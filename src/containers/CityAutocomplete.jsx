import React, { useState, useRef } from 'react';
import axios from 'axios';
import { cityList } from '../cityList';
import { useHistory, useParams } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendRequest } from '../redux/actions/actions';

const CityAutocomplete = ({ seted_city, sendRequest }) => {
  const dropdownContainer = useRef(null);
  const [optionValue, setOptionValue] = useState('');
  const history = useHistory();
  let cityName = seted_city.split(',');

  const redirectFunction = (value) => {
    history.push(`/${value}`);
  };

  const handleChange = (event, data) => {
    redirectFunction(data.value);
    sendRequest(data.value);
  };

  const handleSearchChange = (e, { searchQuery }) => {
    setOptionValue(searchQuery);
  };

  const onKeyDown = (event, data) => {
    switch (event.keyCode) {
      // enter
      case 13: {
        redirectFunction(optionValue);
        dropdownContainer.current?.focus();
        break;
      }
    }
  };

  return (
    <div ref={dropdownContainer} tabIndex={-1}>
      <Dropdown
        placeholder='Select a city'
        onChange={handleChange}
        onSearchChange={handleSearchChange}
        onKeyDown={onKeyDown}
        closeOnEscape
        noResultsMessage='You can get weather for other city'
        options={cityList}
        fluid
        search
        selection
        value={cityName[0]}
      />
    </div>
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
    setSelectedCity: (value) => dispatch(setSelectedCity(value)),
    setWeatherData: (value) => dispatch(setWeatherData(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityAutocomplete);
