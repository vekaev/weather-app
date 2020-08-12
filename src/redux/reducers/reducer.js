import React from 'react';
import { SET_SELECTED_CITY, SET_WEATHER_DATA } from '../actions/actionTypes';

export const initialState = {
  seted_city: 'Getting your location..',
  weather_data: null,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CITY:
      return {
        ...state,
        ...action.payload,
      };
      break;
    case SET_WEATHER_DATA:
      return {
        ...state,
        ...action.payload,
      };
      break;

    default:
      return { ...state };
  }
};
