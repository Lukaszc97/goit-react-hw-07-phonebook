import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux'; 
import App from './components/App'; 
import './index.css';
import {store} from './Redux/Store'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

