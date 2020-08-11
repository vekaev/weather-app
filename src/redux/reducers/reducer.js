import React from 'react';
import { SET_SELECTED_CITY, SET_WEATHER_DATA } from '../actions/actionTypes';

export const initialState = {
  seted_city: 'Getting your location..',
  weather_data: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CITY:
      return {
        ...state,
        ...action.playload,
      };
      break;
    case SET_WEATHER_DATA:
      return {
        ...state,
        ...action.playload,
      };
      break;

    default:
      return { ...state };
  }
};
