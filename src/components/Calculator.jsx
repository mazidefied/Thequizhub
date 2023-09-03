import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const Calculator = ({className, closeCalc}) => {
  return (
    <div className={className?className:'calc-container'}>
        <button className='close' onClick={closeCalc}>
            <FaArrowLeft /> Back
        </button>
        <div className='calc-holder'>
            <iframe src={"https://quiz-hub-calculator.netlify.app"} width={500} height={500} title='Calculator'></iframe>
        </div>
    </div>
  )
}

export default Calculator