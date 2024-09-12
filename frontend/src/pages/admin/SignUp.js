import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignUp.css'

const SignUp = () => {
  return (

    <div>
      <form className='signup-form'>
        <div>
          <Label value='Username' />
          <TextInput type='text' placeholder='UserName' id='username' />
        </div>
        <div>
          <Label value='Email' />
          <TextInput type='text' placeholder='Email' id='email' />
        </div>
        <div>
          <Label value='Password' />
          <TextInput type='text' placeholder='Password' id='password' />
        </div>
        <Button type='submit'>
          Sign Up
        </Button>
      </form>
      <div>
        <span>Have an account?</span>
        <Link to='/sign-in'>
          Sing In
        </Link>
      </div>
    </div>
  )
}

export default SignUp;