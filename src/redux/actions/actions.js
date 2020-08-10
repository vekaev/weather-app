// import { SEND_SEARCH_REQUEST, SET_TRANSPORTATION_STATUS } from './actionTypes';
// import axios from 'axios';
//
// export const sendSearchRequest = (value) => {
//   return {
//     type: SEND_SEARCH_REQUEST,
//     playload: value,
//   };
// };
// export const setTransportationStatus = (value) => {
//   return {
//     type: SET_TRANSPORTATION_STATUS,
//     playload: value,
//   };
// };
//
// export const sendRequest = (value) => (dispatch) => {
//   axios
//     .get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=e70b3d12e10d1735e93d7770e126a258`)
//     .then((res) => {
//       console.log(res);
//       dispatch(sendSearchRequest({ responce_data: customResponce }));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
