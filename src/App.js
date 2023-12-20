import React from 'react'
import './App.css'
import Card from './components/Card'

const App = () => {

  return (
    <div className='App__main'>
      <div className='head'>
        <h1>BMI CALCULATOR</h1>
      </div>
      <div className='crd'>
        <Card />
      </div>
    </div>
  )
}

export default App