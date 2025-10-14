import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const incValue = () => {
    if(counter < 20){
      counter++;
      setCounter(counter);
    }
    else{
      counter = 20;
    }
  }
  const decValue = () => {
    if(counter > 0){
      counter--;
      setCounter(counter);
    }
    else{
      counter = 0;
    }
  }

  return (
    <>
    <h1>Welcome...</h1>
    <h2>React with Javascript in Vite</h2>
    <p>Counter: {counter}</p>
    <button onClick={incValue}>Increase: {counter}</button>
    <button onClick={decValue}>Decrease: {counter}</button>
    </>
  )
}

export default App
