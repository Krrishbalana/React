import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  //let counter = 10;

  const add = function(){
      //console.log(`value addes ${Math.random()}`);
      //counter = counter + (Math.random()*10)
      setCounter(counter + 1);
  }
  const sub = function(){
    setCounter(counter - 1);
  }
  return (
    
    <>
    <h1>Hello krish lets learn "useState" in react</h1>
    <h2>counter Value: {counter}</h2>

    <button onClick={add}>increase value</button>
    <button onClick={sub}>decrease value</button>
    </>
  )
}

export default App
