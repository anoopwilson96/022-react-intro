
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
  const [FivePower, setPower] = useState(1);
  function countNumber(){
    setPower(FivePower + 1)
  }
  function newPower(){
    setPower(1)
  }


  return (
    <>
    <main>
    <div className='countButtonDiv' >
      <MyTopObject />
      <h1>{number}</h1>
      <button className='countButton' onClick={() =>{count(); countNumber();}} power={FivePower} > <b>Click me to MULTIPLY</b></button>
      <br/>

      <button className='countButton' onClick={()=>{newValue(); newPower();}} power={FivePower} > <b>reset it</b></button>
      

    </div>
    </main>
    </>
  )
}

export default App
