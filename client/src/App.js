import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';
import reactIcon from './react.svg';
import mongoDBIcon from './mongodb.svg';
import expressIcon from './express.png';
import nodeJsIcon from './nodejs.svg';
import './App.css';

//TODO: Refractor to useState (React Hooks)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <code>GregSoares.com</code>
          </p>
          <p id="welcoMessage" className="font-weight-bolder">Full-Stack JavaScript Web Development</p>
          <ul className="li"><img id="reactLogo" src={mongoDBIcon} className="icon" alt="React Icon" /> MongoDB</ul>
          <ul className="li"><img id="reactLogo" src={expressIcon} className="icon" alt="React Icon" /> ExpressJs</ul>
          <ul className="li"><img id="reactLogo" src={reactIcon} className="reactIcon icon" alt="React Icon" />
ReactJs</ul>
          <ul className="li"><img id="reactLogo" src={nodeJsIcon} className="icon" alt="React Icon" /> NodeJs</ul>
          <p
            className="App-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coming on 10th 2020
          </p>
          
          {/* <Button color="danger">ReactStrap On</Button> */}
          
        </header>
        <footer class="footer inline-block">
          <div class="container">
          <p className="col text-left text-muted">Icons from icons8.com.  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; 
All Open Source technologies and sources  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; All Right Reserved                    </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
