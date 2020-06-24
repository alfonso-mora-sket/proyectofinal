import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
//import Redux from './components/Redux';

ReactDOM.render(
  //<Provider store={createStore(reducers)}>
  //<Redux/>,
    <App/>,
  //</Provider>,
  document.getElementById('root')
);