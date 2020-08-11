import React from 'react';
import { SET_SELECTED_CITY } from '../actions/actionTypes';

export const initialState = {
  seted_city: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CITY:
      return {
        ...state,
        ...action.playload,
      };
      break;
    default:
      return { ...state };
  }
};
