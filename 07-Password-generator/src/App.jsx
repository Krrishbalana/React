
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState(" ");

  //useRef hook
  const passwordRef = useRef(null);
  const passwordCopy = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback( () => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNum){string += "1234567890"}
    if(isChar){string += '!@#$%&*?'}

    for(let i = 1; i < length; i++){
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char)
    }
    
    setPassword(pass)
  } , [length, isNum, isChar, setPassword])

  useEffect(()=>{
    passwordGenerator();
  }, [length, isNum, isChar, passwordGenerator])

  return (
    <>
      <div className='relative h-screen w-screen text-white'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border px-4 py-7 rounded-2xl shadow-2xl shadow-amber-100 '>
        <h1 className='text-2xl text-center m-4 font-bold text-white'>Password Generator</h1>
        <div className='flex gap-1.5'>
        <input className='w-full border px-4 py-1 rounded-2xl my-3 text-white' type="text" value={password} placeholder='password...' ref={passwordRef} readOnly/>
        <button className='w-10 h-10 flex items-center justify-center rounded-full text-white border mt-2 hover:bg-white hover:text-black duration-500 shadow shadow-amber-100' onClick={passwordCopy}><i class="fa-regular fa-copy"></i></button>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <h3>Include Numbers</h3>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked={isNum} id='numInput' onChange={() => {setIsNum((prev) => !prev)}} class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-all duration-300"></div>
            <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-all duration-300"></div>
          </label>
        </div>
        <div className='flex justify-between'>
          <h3>Include Symbols</h3>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked={isChar} id='CharInput' onChange={() => {setIsChar((prev) => !prev)}} class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-all duration-300"></div>
            <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-all duration-300"></div>
          </label>
        </div>
        </div>
        <div className='flex justify-between my-3'>
          <h3>length: {length}</h3>
          <input type="range"
          min={6}
          max={50}
          value={length}
          className='flex justify-center text-2xl cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
        </div>
        <div className='flex justify-center'>
        <button className=' bg-amber-500 px-4 py-1 rounded-2xl' onClick={passwordGenerator}>
          GENERATE
        </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
