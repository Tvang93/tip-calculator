import { useState } from 'react'
import './App.css'
import CalculatorComponent from './components/calculatorComponent'
function App() {

  return (
    <div className='flex flex-col justify-center items-center min-h-max gap-20 pt-32'>
      <div>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div>
        <CalculatorComponent />
      </div>
    </div>
  )
}

export default App
