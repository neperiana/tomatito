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

const secondsToTime = (totalSeconds) => {

  let minutes = Math.floor(totalSeconds/60);
  let seconds = totalSeconds - minutes*60;

  return([zeroPad(minutes, 2),  zeroPad(seconds, 2)]);
}

const minutesToSeconds = (minutes) => minutes*60

// Main App Component
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isLive: false,
      display: {
        type: 'break',
        seconds: minutesToSeconds(55),
      }, 
      settings: {
        work: 55,
        break: 5,
      }
    };
    this.handleRestart = this.handleRestart.bind(this);
    this.setSettings = this.setSettings.bind(this);
    this.settingsManualInput = this.settingsManualInput.bind(this);
    this.settingsArrowClick = this.settingsArrowClick.bind(this);
  }
  handleRestart(event){
    this.setState({ 
      isLive: false,
      display: {
        type: 'work',
        seconds: minutesToSeconds(13)+12,
      }, 
      settings: {
        work: 55,
        break: 5,
      }
    });
  }
  setSettings(type, value){
    if (type == 'work') {
      console.log('holahola:',type, value);
      this.setState({ 
        settings: {
          work:  value > 0 ? value : 0,
          break: this.state.settings.break,
        }
      });
    } else if (type == 'break') {
      this.setState({ 
        settings: {
          work: this.state.settings.work,
          break: value > 0 ? value : 0,
        }
      });
    }
  }
  /*
  this.myInterval = setInterval(() => {
    this.setState(({ seconds }) => ({
      seconds: seconds - 1
    }))
  }, 1000)
  */ 
  settingsManualInput(event){
    let settingsType = event.target.id == 'workControl' ? 'work' : 'break';
    this.setSettings(settingsType, event.target.value); 
  }
  settingsArrowClick(event){
    let settingsType = event.target.parentElement.id == 'workArrowsContainer' ? 'work' : 'break';
    let change = event.target.id.includes('up') ? 1 : -1;
    let newValue = (settingsType == 'work' ?  this.state.settings.work : this.state.settings.break) + change;
    this.setSettings(settingsType, newValue); 
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
          <SettingsComponent 
            settings={this.state.settings} 
            onChange={this.settingsManualInput} 
            onArrowClick={this.settingsArrowClick}
          />
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
  let minutes, seconds
  [minutes, seconds] = secondsToTime(props.display.seconds);
  //console.log(minutes, seconds);
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
            <span>{minutes}</span>
          </div>
          <div className="display" id="seconds">
            <span>{seconds}</span>
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
        <span>work (min): </span>
        <span>break (min): </span>
      </div>
      <div id="inputs" className="sideControlCol">
        <Form.Control size="sm" type="text" id="workControl" value={props.settings.work} onChange={props.onChange}/>
        <Form.Control size="sm" type="text" id="breakControl" value={props.settings.break} onChange={props.onChange}/>
      </div>
      <div id="buttons" className="sideControlCol">
        <div className="upDownButtonsContainers" id="workArrowsContainer">
          <img src={upLogo} id="upWorkLogo" className="arrowButtton" alt="up worktime button" onClick={props.onArrowClick}/>
          <img src={downLogo} id="downWorkLogo" className="arrowButtton" alt="down worktime button" onClick={props.onArrowClick}/>
        </div>
        <div className="upDownButtonsContainers" id="breakArrowsContainer">
          <img src={upLogo} id="upWorkLogo" className="arrowButtton" alt="up worktime button"  onClick={props.onArrowClick}/>
          <img src={downLogo} id="downWorkLogo" className="arrowButtton" alt="down worktime button"  onClick={props.onArrowClick}/>
        </div>
      </div>
    </div>
  );
};

export default App;
