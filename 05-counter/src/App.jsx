import './App.css'
import React, { useState } from 'react';


function App() {
  let[counter, setCounter] = useState(0);
  const add = function(){
    setCounter(counter + 1);
  }
  const sub = function(){
    setCounter(counter - 1);
  }

  return (
    <>
      <div className='h-screen w-screen relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-4xl flex justify-center p-4'>count is: {counter}</h1>
        <div className='flex gap-5'>
        <button className='rounded-2xl border border-black p-4 hover:bg-black hover:text-white duration-300' onClick={add}>increment</button>
        <button className='rounded-2xl border border-black p-4 hover:bg-black hover:text-white duration-300' onClick={sub}>decrement</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
