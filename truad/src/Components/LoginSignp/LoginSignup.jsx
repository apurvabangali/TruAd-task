import React, {Component} from 'react'
import './LoginSignup.css'
import '../Dashboard/Home.jsx'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const LoginSignup = () => {
  
  return (
    <div className='bg'>
    <div className='container'>
       <div className='header'>
       <div className='text'> TruAD</div> 
       <div className='underline'></div> 
       </div>

      <div className='inputs'>
      <div className='input'>
        <img src={user_icon} alt="" />
        <input type="text" placeholder='Name' required/>
      </div>
      <div className='input'>
        <img src={email_icon} alt="" />
        <input type="email" placeholder='Email' required/>
      </div>
      <div className='input'>
        <img src={password_icon} alt="" />
        <input type="password"  placeholder=' Password' required/>
      </div>
      </div> 
      <div className='submit-container'> 
      <div className='submit'>
        <a href='/Home'>
        <button>Login</button>
       </a> 
     </div>
      </div>
         
    </div>
    </div>

    
  )
}

export default LoginSignup
