import React from 'react';
import './App.scss';

function App() {
  // const display = document.getElementById('display');
  // display.innerHTML = 'Testing here'
  document.getElementById('display').innerHTML = 'Testing here'

  function myReset() {
    let thisDisplay = document.getElementById('display');
    thisDisplay.innerHTML = '';
  }

  return (
    <div className="App">
      <div className="calculator" id="calculator">
        <div className='screen' id='screen'>
          <h3>Answer is:</h3>
          <p className="display" id="display"></p>
        </div>
        <div className="interface" id="interface">
          <div className="clear button" id="clear" onClick={myReset}><p>C</p></div>
          <div className="parenthesis button" id="parenthesis"><p>( )</p></div>
          <div className="percent button" id="percent"><p>%</p></div>
          <div className="divide button" id="divide"><p>/</p></div>
          <div className="seven button" id="seven"><p>7</p></div>
          <div className="eight button" id="eight"><p>8</p></div>
          <div className="nine button" id="nine"><p>9</p></div>
          <div className="mulitiply button" id="multiply"><p>X</p></div>
          <div className="four button" id="four"><p>4</p></div>
          <div className="five button" id="five"><p>5</p></div>
          <div className="six button" id="six"><p>6</p></div>
          <div className="subtract button" id="subtract"><p>-</p></div>
          <div className="one button" id="one"><p>1</p></div>
          <div className="two button" id="two"><p>2</p></div>
          <div className="three button" id="three"><p>3</p></div>
          <div className="add button" id="add"><p>+</p></div>
          <div className="color button" id="color"></div>
          <div className="zero button" id="zero"><p>0</p></div>
          <div className="decimal button" id="decimal"><p>.</p></div>
          <div className="equals button" id="equals"><p>=</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;