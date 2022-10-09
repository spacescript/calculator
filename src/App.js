import React, { useState, useReducer } from 'react';
import './App.scss';
// import { useState } from 'react';

function reducer(state, { type, payload }) {
  return {count: state.count}
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const [count, setCount] = useState('');
  // const display = document.getElementById('display');
  // let display = document.getElementById('display').innerHTML;
  // display.innerHTML = 'Testing here';

  // document.getElementById('display').innerHTML = 'Testing here'

  function myReset() {
    let display = document.getElementById('display');
    display.innerHTML = '';
  }

  // function this.updater = (event) => {
  //   // let numbers = document.getElementsByClassName('number');
  //   // numbers.innerHTML += id;
  //   // const myNumber = document.getElementById()
  //   console.log(event)
  // }

  // function updater(key) {
  //   console.log(key)
  // }

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
          <div className="seven number button" id="seven"><p>7</p></div>
          {/* key='7' onClick={updater(key)} */}
          <div className="eight number button" id="eight"><p>8</p></div>
          <div className="nine number button" id="nine"><p>9</p></div>
          <div className="mulitiply button" id="multiply"><p>X</p></div>
          <div className="four number button" id="four"><p>4</p></div>
          <div className="five number button" id="five"><p>5</p></div>
          <div className="six number button" id="six"><p>6</p></div>
          <div className="subtract button" id="subtract"><p>-</p></div>
          <div className="one number button" id="one"><p>1</p></div>
          <div className="two number button" id="two"><p>2</p></div>
          <div className="three number button" id="three"><p>3</p></div>
          <div className="add button" id="add"><p>+</p></div>
          <div className="color button" id="color"></div>
          <div className="zero number button" id="zero"><p>0</p></div>
          <div className="decimal button" id="decimal"><p>.</p></div>
          <div className="equals button" id="equals"><p>=</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;