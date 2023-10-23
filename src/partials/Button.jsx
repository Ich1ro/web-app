import React from 'react'
import './style.css'

const Button = ({text, onClick}) => {
  return (
    <button className='partial_button' onClick={() => onClick()}>{text}</button>
  )
}

export default Button