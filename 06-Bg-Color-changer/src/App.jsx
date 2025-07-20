import { useState } from 'react'
import './App.css'

function App() {
const [background, setBackground] = useState('');
const blue = function(){
  setBackground("blue");
}
const red = function(){
  setBackground("red");
}
const pink = function(){
  setBackground("pink");
}
const yellow = function(){
  setBackground("yellow");
}
const olive = function(){
  setBackground("olive");
}
  return (
    <>
      <div className='relative h-screen w-screen' style={{backgroundColor: background}}>
        <div className='absolute rounded-4xl left-1/2 -translate-x-1/2 top-1 shadow-2xl shadow-neutral-950 flex space-x-5 justify-center bg-black text-white'>
            <button onClick={blue} className='border px-4 m-4 rounded-2xl text-2xl hover:bg-blue-700 hover:text-black hover:px-6 duration-500'>blue</button>
            <button onClick={red} className='border px-4 m-4 rounded-2xl text-2xl hover:bg-red-700 hover:text-black hover:px-6 duration-500'>red</button>
            <button onClick={pink} className='border px-4 m-4 rounded-2xl text-2xl hover:bg-pink-300 hover:text-black hover:px-6 duration-500'>pink</button>
            <button onClick={yellow} className='border px-4 m-4 rounded-2xl text-2xl hover:bg-yellow-500 hover:text-black hover:px-6 duration-500'>yellow</button>
            <button onClick={olive} className='border px-4 m-4 rounded-2xl text-2xl hover:bg-lime-900 hover:text-black hover:px-6 duration-500'>olive</button>
        </div>
      </div>
    </>
  )
}

export default App
