import React, { useEffect, useState } from 'react'
import './style.css'

export default function LoginSingUpForm() {

  const [isActive, setActive] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const usernameOnChange = (event) => {
    setUsername(event.target.value)
  }

  const emailOnChange = (event) => {
    setEmail(event.target.value)
  }


  const passwordOnChange = (event) => {
    setPassword(event.target.value)
  }

  const registerBtn = () => {
    setActive(true)
  }

  const loginBtn = () => {
    setActive(false)
  }


  const loginUser = async () => {
    await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
  }

  const createUser = async () => {
    const user = { username: username, email: email, password: password };
    await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      });
  }


  return (
    <div className={`wapper-box ${isActive ? 'active' : ''} shadow`} >

      <div className="dont-acc">
        <h1 className='text-white display-5 fw-bold '>Hello Welcome!</h1>
        <p className='text-white fs-4 fw-medium'>Don't have an account?</p>
        <button className='dont-acc-btn ' onClick={registerBtn}>Register</button>
      </div>


      <div className="login-form">
        <div className="login-content">
          <h1 className='mb-5 display-3 fw-bold'>Login</h1>
          <div className="inputs mb-4">
            <input type="text" name="usermane" id="" onChange={usernameOnChange} value={username} placeholder='Enter User Name' />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="inputs">
            <input type="Password" name="password" id="" onChange={passwordOnChange} value={password} placeholder='Enter Password' />
            <i className="fa-solid fa-lock"></i>
          </div>
          <a href="" className='text-decoration-none m-3 text-dark'>Forget Password?</a>
          <button onClick={loginUser} >Login</button>
          <p className='mt-3 mb-2'>Login with socail media platforms</p>
          <div className="socail-media-icons">
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>
      <div className="toggle-box"></div>

      <div className="register-form">
        <div className="login-content">
          <h1 className='mb-5 display-3 fw-bold'>SignUp</h1>
          <div className="inputs mb-4">
            <input type="text" name="username" value={username} id="" placeholder='Username' onChange={usernameOnChange} />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="inputs mb-4">
            <input type="email" name="email" id="" value={email} placeholder='Email' onChange={emailOnChange} />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="inputs mb-4">
            <input type="Password" name="password" value={password} id="" placeholder='Password' onChange={passwordOnChange} />
            <i className="fa-solid fa-lock"></i>
          </div>
          <button onClick={createUser}>SignUp</button>
        </div>
      </div>

      <div className="already-acc">
        <h1 className='text-white display-5 fw-bold '>Hello Welcome!</h1>
        <p className='text-white fs-4 fw-medium'>Already have an account?</p>
        <button className='dont-acc-btn ' onClick={loginBtn}>Login</button>
      </div>

    </div >
  )
}
