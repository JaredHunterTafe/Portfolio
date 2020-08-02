import React from 'react';

import MainPage from "./components/mainPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Future from "./components/Future";
// import './main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import backgroundGradient from './background.jpg'
import backgroundImage from "./background.jpg"
import Button from 'react-bootstrap/Button'


const divStyle = {
  width: '100%',
  height: '1080px',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover'
};


export default function App() {

  return (
    // <div>
    <div style={{ backgroundImage: `url(${backgroundImage}) `,  width: '100%',
    height: '1000px',
    backgroundSize: 'cover' }}>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/future">
            <Future />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


