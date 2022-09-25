import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
