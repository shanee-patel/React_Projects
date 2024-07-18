import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [counter ,setCounter] = useState(1) //hooks

  const addValue= ()=>{
    // counter = counter+1
    // console.log("value added",counter)
    if(counter !== 20){
      setCounter(counter+1)
    }
    else{
      console.log("not exeed more then 20")
    }
    
  }
  const removeValue= ()=>{
    // counter = counter+1
    // console.log("value added",counter)
    if(counter !==0){
      setCounter(counter-1)
    }
    else{
      console.log("not reduce less then 20")
    }
  }

//  let counter =1
   return(
    <>
    <h1> Hello EveryOne</h1>
    <h3>Counter value: {counter}</h3>

    <button onClick={addValue}>Add value</button>
    <br></br>
    <button onClick={removeValue}>remove Value</button>
    </>
   )
}

export default App
