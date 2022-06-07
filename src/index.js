import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { Provider } from 'react-redux';
import store  from './redux/store';
import { HelmetProvider } from 'react-helmet-async';

//import 'bootstrap/dist/css/bootstrap.css';

import './App.scss';  // Importing Sass with Bootstrap CSS

import { createAlert } from './helpers/messaging';

window.alert=createAlert;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
            <HelmetProvider>
                <App />
            </HelmetProvider>
      </Provider>
  </React.StrictMode>
);


