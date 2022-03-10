import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/Store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

    </Provider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

