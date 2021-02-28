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

function App() {
  return (
    <div className="App">

      <header className="header">
          <img src={logo} className="appLogo" alt="logo" />
          <span>Reloj Tomatito</span>
      </header>

      <div id="contentBox">
        <ClockComponent />
        <SettingsComponent />
      </div>  

      <footer className="footer">
        <span>  &#169; 2021, camila.</span>
      </footer>
      
    </div>
  );
}


// Main clock
const ClockComponent = props => {
  return (
    <div id="mainBody">
      <div id="buttonsContainer">
        <div className="topButtonContainer">
          <img src={restartLogo} id="restartLogo" className="imageButtton" alt="restart button" />
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
            <p>break</p>
          </div>
          <div className="display" id="minutes">
            <p>05</p>
          </div>
          <div className="display" id="seconds">
            <p>39</p>
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
