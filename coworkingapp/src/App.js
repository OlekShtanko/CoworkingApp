import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SwitchBar from "./components/Switch/SwitchBar"
function App() {
  return (
    <div>
       <Switch>
      < SwitchBar/>
        </Switch>
    </div>
  );
}

export default App;
