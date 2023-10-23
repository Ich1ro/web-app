import React from 'react'
import './style.css'
import Input from '../../partials/Input'
import Button from '../../partials/Button'

const SignUp = () => {
  return (
    <div className='signup'>
      <h3>Welcome back!</h3>
      <p className='signup_details'>Let's create your account if you don't have one</p>
      <form> 
       <Input type='email' placeholder='Email'/>
       <Input type='password' placeholder='Password'/>
       <Input type='password' placeholder='Confirm password'/>
        <div className='checkbox'>
            <input type='checkbox'/>
            <p>I would like to stay updated on the latest news, events and updates</p>
        </div>
       <Button text='Sign up'/>
      </form>
    </div>
  )
}

export default SignUp