import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { getAccessToken } from './utils/bridge';

function init() {
  getAccessToken();
  try {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root'),
    );
  } catch (e) {
    console.log(e);
  }
}

init();
