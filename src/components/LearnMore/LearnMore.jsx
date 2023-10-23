import React from 'react'
import './style.css'

const LearnMore = ({title, buttonText}) => {
  return (
    <div className='learn_more'>
        <p>Join us today</p>
        <h4>{title}</h4>
        <button className='learn_more_button'>{buttonText}</button>
    </div>
  )
}

export default LearnMore