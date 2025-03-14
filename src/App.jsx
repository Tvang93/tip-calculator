import { useState } from 'react'
import './App.css'
import CalculatorComponent from './components/CalculatorComponent'
function App() {

  return (
    <div className='flex flex-col justify-center items-center min-h-max'>
      <div className='my-14 lg:mt-32 lg:mb-20'>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className='bg-white rounded-2xl p-8'>
        <CalculatorComponent />
      </div>
    </div>
  )
}

export default App
