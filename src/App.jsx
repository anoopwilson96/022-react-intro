
import './App.css'
import MyTopObject from './components/top';
import { useState } from 'react';

function App() {
  const [number, multiplyNumber] = useState(1);
  function count(){
    multiplyNumber(number * 5);
  }

  function newValue() {
    multiplyNumber(1)    
  }

  return (
    <>
    <main>
    <div className='countButtonDiv' >
      <MyTopObject/>
      <h1>{number}</h1>
      <button className='countButton' onClick={count}> <b>Click me to MULTIPLY</b></button>
      <br/>

      <button className='countButton' onClick={newValue} > <b>reset it</b></button>
      

    </div>
    </main>
    </>
  )
}

export default App
