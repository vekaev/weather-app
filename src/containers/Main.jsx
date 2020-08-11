import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedCity } from '../redux/actions/actions';

const City = (props) => {
  let { topicId } = useParams();
  console.log(props);
  // setSelectedCity({ seted_city: topicId });
  return <h3>Requested topic ID: {topicId}</h3>;
};

export const Content = () => {
  return <h3>Main</h3>;
};

export const Main = () => {
  return (
    <>
      <Route path={`/:topicId`}>
        <City />
      </Route>
      <Route exact path='/'>
        <Content />
      </Route>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCity: (value) => dispatch(setSelectedCity(value)),
  };
};

// const mapStateToProps = (state) => {
//   return {
//     responce_data: state.responce_data,
//     transportation_status: state.transportation_status,
//   };
// };

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(City);
