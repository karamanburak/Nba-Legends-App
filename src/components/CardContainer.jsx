import React from 'react'
import backgroundImage from '../assets/nba-logo2.png'


const CardContainer = () => {
  return (
    <div className='container'>
    <div className='text-center mt-5'>
              <img className='rounded' src={backgroundImage} alt="" width="80%"/>
    </div>

    </div>
  )
}

export default CardContainer