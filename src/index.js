import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href =
  'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
