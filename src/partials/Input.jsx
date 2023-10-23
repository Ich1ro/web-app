import React from 'react'
import './style.css'

const Input = ({type, placeholder}) => {
  return (
    <input className='partial_input' type={type} placeholder={placeholder}/>
  )
}

export default Input