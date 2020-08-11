import { SET_SELECTED_CITY } from './actionTypes';

export const setSelectedCity = (value) => {
  return {
    type: SET_SELECTED_CITY,
    playload: value,
  };
};
