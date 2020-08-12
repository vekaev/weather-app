import React from 'react';
import { Route } from 'react-router-dom';
import styles from './Constainer.module.scss';
import SelectedCity from './SelectedCity';
import CurrentCity from './CurrentCity';

const Main = () => {
  return (
    <div className={styles['main']}>
      <Route path={`/:topicId`}>
        <SelectedCity />
      </Route>
      <Route exact path='/'>
        <CurrentCity />
      </Route>
    </div>
  );
};

export default React.memo(Main);
