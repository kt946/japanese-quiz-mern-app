import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import store and provider
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap provider around App and pass store as prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
