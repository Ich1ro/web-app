import React from 'react'
import Input from '../../partials/Input'
import './style.css'
import Button from '../../partials/Button'

const Age = () => {
  return (
    <div className="age">
      <form>
        <Input type='text' placeholder='Enter the age'/>
        <Button text='Next'/>
      </form>
    </div>
  )
}

export default Age