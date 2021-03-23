import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WaveBorderDown from  './components/MainPage/Wave/WaveBorderDown'
import WaveBorderUp from './components/MainPage/Wave/WaveBorderUp'
import {
  BrowserRouter as Router} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode>
      <Router> 
        <App/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
