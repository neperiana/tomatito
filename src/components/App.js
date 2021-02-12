import logo from './../media/tomato.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Reloj Tomatito</p>
      </header>
      <div id="contentBox">
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
      </div>
      <footer>
          <p>	&#169; 2020, camila.</p>
        </footer>
    </div>
  );
}

export default App;
