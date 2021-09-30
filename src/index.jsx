import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// base bootstrap 5 libraries for react-bootstrap and utility classes
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// custom style, import after bootstrap
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
