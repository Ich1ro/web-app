import React from 'react'
import Input from '../../partials/Input'
import './style.css'
import Button from '../../partials/Button'
import { useNavigate } from 'react-router'

const Age = () => {
  const navigate = useNavigate()

  const nav = () => {
    navigate('/welcome')
  }

  return (
    <div className="age">
      <form>
        <Input type='text' placeholder='Enter the age'/>
        <Button text='Next' onClick={() => nav()}/>
      </form>
    </div>
  )
}

export default Age