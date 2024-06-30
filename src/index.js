import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// MARK: - React-Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*
TODO: 03:引入store
MARK: - 引入store
*/
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
