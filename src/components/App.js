// React
import React, { Component } from 'react';

// images
import logo from './../media/tomato.svg';
import restartLogo from './../media/repeat.svg';
import playLogo from './../media/play-button.svg';
import pauseLogo from './../media/pause-button.svg';
import upLogo from './../media/up-arrow.svg';
import downLogo from './../media/down-arrow.svg';

// bootstrap
import Form from 'react-bootstrap/Form';

// css
import './App.css';

// utils
const zeroPad = (num, places) => String(num).padStart(places, '0')

// Main App Component
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isLive: false,
      display: {
        type: 'break',
        time: {
          minutes: 5,
          seconds: 39
        },
      }, 
      settings: {
        work: 55,
        break: 5,
      }
    };
    this.handleRestart = this.handleRestart.bind(this);
  }
  handleRestart(event){
    this.setState({ 
      isLive: false,
      display: {
        type: 'work',
        time: {
          minutes: 55,
          seconds: zeroPad(0, 2)
        },
      }, 
      settings: {
        work: 55,
        break: 5,
      }
    });
  }
  render(){
    return (
      <div className="App">
  
        <header className="header">
            <img src={logo} className="appLogo" alt="logo" />
            <span>Reloj Tomatito</span>
        </header>
  
        <div id="contentBox">
          <ClockComponent display={this.state.display} refresh={this.handleRestart}/>
          <SettingsComponent />
        </div>  
  
        <footer className="footer">
          <span>  &#169; 2021, camila.</span>
        </footer>
  
      </div>
    );
  }
}


// Main clock
const ClockComponent = props => {
  return (
    <div id="mainBody">
      <div id="buttonsContainer">
        <div className="topButtonContainer">
          <img src={restartLogo} id="restartLogo" className="imageButtton" alt="restart button" onClick={props.refresh}/>
          <div className="topButton"></div>
        </div>
        <div className="topButtonContainer">
          <img src={playLogo} id="playpauseLogo" className="imageButtton" alt="play/pause button" />
          <div className="topButton"></div>
        </div>
      </div>
      <div id="redCarcass">
        <div id="paleInside">
          <div className="display" id="type">
            <span>{props.display.type}</span>
          </div>
          <div className="display" id="minutes">
            <span>{props.display.time.minutes}</span>
          </div>
          <div className="display" id="seconds">
            <span>{props.display.time.seconds}</span>
          </div>
        </div>
      </div>
      <div id="redBase"></div>
    </div>
  );
};

// Settings
const SettingsComponent = props => {
  return (
    <div id="sideControl">
      <div id="labels" className="sideControlCol">
        <span>work: </span>
        <span>break: </span>
      </div>
      <div id="inputs" className="sideControlCol">
        <Form.Control size="sm" type="text" placeholder="55 min" />
        <Form.Control size="sm" type="text" placeholder="5 min" />
      </div>
      <div id="buttons" className="sideControlCol">
        <div className="upDownButtonsContainers">
          <img src={upLogo} id="upWorkLogo" className="arrowButtton" alt="up worktime button" />
          <img src={downLogo} id="downWorkLogo" className="arrowButtton" alt="down worktime button" />
        </div>
        <div className="upDownButtonsContainers">
          <img src={upLogo} id="upWorkLogo" className="arrowButtton" alt="up worktime button" />
          <img src={downLogo} id="downWorkLogo" className="arrowButtton" alt="down worktime button" />
        </div>
      </div>
    </div>
  );
};

export default App;
