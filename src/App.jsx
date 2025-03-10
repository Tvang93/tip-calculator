import { useState } from 'react'
import './App.css'
import CalculatorComponent from './components/calculatorComponent'
function App() {

  return (
    <div className='flex flex-col justify-center items-center min-h-max gap-20 pt-32'>
      <div>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className='bg-white rounded-2xl p-4'>
        <CalculatorComponent />
      </div>
    </div>
  )
}

export default App
