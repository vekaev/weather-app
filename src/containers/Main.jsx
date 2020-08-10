import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

export const City = () => {
  let { topicId } = useParams();
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
