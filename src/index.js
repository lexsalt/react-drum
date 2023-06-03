import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        status: "On",
      statusColor: 'green',
      currentSound: ""
    };
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.switchOnOff = this.switchOnOff.bind(this);  
    this.pressedQ = this.pressedQ.bind(this);
        this.pressedW = this.pressedW.bind(this);
        this.pressedE = this.pressedE.bind(this);
        this.pressedA = this.pressedA.bind(this);
        this.pressedS = this.pressedS.bind(this);
        this.pressedD = this.pressedD.bind(this);
        this.pressedZ = this.pressedZ.bind(this);
        this.pressedX = this.pressedX.bind(this);
        this.pressedC = this.pressedC.bind(this);
  }
  componentDidMount(event) {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  handleKeyPress(event) {
    if (event.keyCode === 81) {
        this.pressedQ();
    }
    else if (event.keyCode === 87) {
        this.pressedW();
    }
    else if (event.keyCode === 69) {
        this.pressedE();
    }
    else if (event.keyCode === 65) {
        this.pressedA();
    }
    else if (event.keyCode === 83) {
        this.pressedS();
    }
    else if (event.keyCode === 68) {
        this.pressedD();
    }
    else if (event.keyCode === 90) {
        this.pressedZ();
    }
    else if (event.keyCode === 88) {
        this.pressedX();
    }
    else if (event.keyCode === 67) {
        this.pressedC();
    }
    //console.log("Keycode es "+event.keyCode)
  }
  switchOnOff() {
    if (this.state.status === "On") {
      this.setState(state => ({
   status: "Off",
        statusColor: "red",
        currentSound: ""
}))
    }
    else if (this.state.status === "Off") {
      this.setState( state => ({
        status: "On",
        statusColor: "green"
      }))
    }
      
}
  pressedQ() {if (this.state.status === "On") {
    const sound = document.getElementById("Q");
    sound.play();
    this.setState(state => ({currentSound: "Heater-1"}))}}  
  pressedW() {if (this.state.status === "On") {
    const sound = document.getElementById("W");
    sound.play();
    this.setState(state => ({currentSound: "Heater-2"}))}}
  pressedE() {if (this.state.status === "On") {
    const sound = document.getElementById("E");
    sound.play();
    this.setState(state => ({currentSound: "Heater-3"}))}}
  pressedA() {if (this.state.status === "On") {
    const sound = document.getElementById("A");
    sound.play();
    this.setState(state => ({currentSound: "Heater-4"}))}}
  pressedS() {if (this.state.status === "On") {
    const sound = document.getElementById("S");
    sound.play();
    this.setState(state => ({currentSound: "Clap"}))}}
  pressedD() {if (this.state.status === "On") {
    const sound = document.getElementById("D");
    sound.play();
    this.setState(state => ({currentSound: "Open-HH"}))}}
  pressedZ() {if (this.state.status === "On") {
    const sound = document.getElementById("Z");
    sound.play();
    this.setState(state => ({currentSound: "Kick-n'-Hat"}))}}
  pressedX() {if (this.state.status === "On") {
    const sound = document.getElementById("X");
    sound.play();    
    this.setState(state => ({currentSound: "Kick"}))}}
  pressedC() {if (this.state.status === "On") {
    const sound = document.getElementById("C");
    sound.play();    
    this.setState(state => ({currentSound: "Closed-HH"}))}}
  render() {
    return (
      <div id="bg">
  <div class="inner-container" id="drum-machine">
        <div class="pad-bank">
          <div>
            <button class="drum-pad" id="Heater-1" onClick={this.pressedQ}><audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</button>
          </div>
          <div>
            <button class="drum-pad" id="Heater-2" onClick={this.pressedW}
              ><audio class="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</button>
          </div>
          <div>
            <button class="drum-pad" id="Heater-3" onClick={this.pressedE}><audio class="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</button>
          </div>
          <div>
            <button class="drum-pad" id="Heater-4" onClick={this.pressedA}><audio class="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</button>
          </div>
          <div>
            <button class="drum-pad" id="Clap" onClick={this.pressedS}><audio class="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</button>
          </div>
          <div>
            <button class="drum-pad" id="Open-HH" onClick={this.pressedD}><audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</button>
          </div>
          <div>
            <button class="drum-pad" id="Kick-n'-Hat" onClick={this.pressedZ}><audio class="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</button>
          </div>
          <div>
            <button class="drum-pad" id="Kick" onClick={this.pressedX}><audio class="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</button>
          </div>
          <div>
            <button class="drum-pad" id="Closed-HH" onClick={this.pressedC}><audio class="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</button>
          </div>
        </div>
        <div class="controls-container">
          <p id="power">Power</p>
          <button id="powerButton" onClick={() => this.switchOnOff()} style={{background: this.state.statusColor}}><p>{this.state.status}</p></button>
          <p id="power">Sound:</p>
            <div id="display"><p>{this.state.currentSound}</p></div>
</div>
        </div>
        </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
