import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Development is happening here!
        </h3>
      </header>
      <div className="calculator" id="calculator">
        <div className="display" id="display">
        </div>
        <div className="interface" id="interface">
          <div className="clear button" id="clear"></div>
          <div className="parenthesis button" id="parenthesis"></div>
          <div className="percent button" id="percent"></div>
          <div className="divide button" id="divide"></div>
          <div className="seven button" id="seven"></div>
          <div className="eight button" id="eight"></div>
          <div className="nine button" id="nine"></div>
          <div className="mulitiply button" id="multiply"></div>
          <div className="four button" id="four"></div>
          <div className="five button" id="five"></div>
          <div className="six button" id="six"></div>
          <div className="minus button" id="minus"></div>
          <div className="one button" id="one"></div>
          <div className="two button" id="two"></div>
          <div className="three button" id="three"></div>
          <div className="add button" id="add"></div>
          <div className="color button" id="color"></div>
          <div className="zero button" id="zero"></div>
          <div className="decimal button" id="decimal"></div>
          <div className="equals button" id="equals"></div>
        </div>
      </div>
    </div>
  );
}

export default App;