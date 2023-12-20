import React from 'react'
import { useState } from 'react'

const Card = () => {

    const [height, setHeight] = useState(1);
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState(0);
    const [category, setCategory] = useState('Add Data');

    const handleSubmit = ()=>{
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setResult(bmiValue.toFixed(2));
      
            if (bmiValue < 18.5) {
              setCategory('Underweight');
            } else if (bmiValue < 24.9) {
              setCategory('Normal');
            } else if (bmiValue < 29.9) {
              setCategory('Overweight');
            } else {
              setCategory('Obese');
            }
          } else {
            setResult(0);
            setCategory('');
          }
    }


    return (
        <div className='card__body'>
            <div className='inptBrd' >
                <label htmlFor="weight">Weight (in kg.)</label>
                <input type="number" className='inptTxt' name="wieght" id="weight" value={weight} onChange={(e) => { setWeight(e.target.value); }} />
            </div>
            <div className='inptBrd' >
                <label htmlFor="height">Height (in cms.)</label>
                <input type="text" className='inptTxt' name="height" id="height" value={height} onChange={(e) => { setHeight(e.target.value) }} />
            </div>
            <div className='btncntr' >
                <button className='submit__btn' onClick={handleSubmit} >Submit</button>
            </div>
            {/* <p>{bmi}</p> */}


            <div className='resultBox' >
                <span className='btncntr' >BMI: {result}</span>
                <br />
                <span className='btncntr' >Categoty: {category}</span>
            </div>

        </div>


    )
}

export default Card