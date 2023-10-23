import React from 'react'
import './style.css'
import Input from '../../partials/Input'
import Button from '../../partials/Button'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()

  const login = () => {
    navigate('/welcome')
  }
  return (
    <div className='login'>
      <h3>Welcome back!</h3>
      <form> 
       <Input type='email' placeholder='Email'/>
       <Input type='password' placeholder='Password'/>
       <Button text='Log in' onClick={() => login()}/>
      </form>
    </div>
  )
}

export default Login