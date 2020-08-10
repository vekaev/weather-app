import React from 'react';
import axios from 'axios';
import { Main } from './containers/Main';
import { Panel } from './containers/Panel';
import { withRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Main />
      <Panel />
    </>
  );
};

export default withRouter(App);
