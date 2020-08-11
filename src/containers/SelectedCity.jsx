import { useHistory, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { sendRequest } from '../redux/actions/actions';
import { connect } from 'react-redux';

const SelectedCity = ({ city, sendRequest }) => {
  let { topicId } = useParams();
  const history = useHistory();

  useEffect(() => {
    sendRequest(topicId);
  }, [topicId]);

  const returnToHomePage = () => {
    history.push('/');
  };

  return (
    <>
      <h1>{city}</h1>
      <button onClick={returnToHomePage}>Back</button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendRequest: (value) => dispatch(sendRequest(value)),
  };
};

export default React.memo(
  connect(
    // mapStateToProps,
    null,
    mapDispatchToProps,
  )(SelectedCity),
);
