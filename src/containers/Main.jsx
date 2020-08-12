import React from 'react';
import { Route } from 'react-router-dom';

import SelectedCity from './SelectedCity';

import CurrentCity from './CurrentCity';

const Main = () => {
  return (
    <>
      <Route path={`/:topicId`}>
        <SelectedCity />
      </Route>
      <Route exact path='/'>
        <CurrentCity />
      </Route>
    </>
  );
};

export default React.memo(Main);
