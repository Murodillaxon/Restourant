import React, { useEffect, useRef, useState } from 'react'
import './style.css'

const Registration = () => {
  const name = useRef()
  const mail = useRef()
  const password = useRef()


  const [showHome, setShowHome] = useState(false)
  const localSignUp = localStorage.getItem('signUp')
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true)
    }
  })

  const handleClick = () => {
    console.log(name.current.value, mail.current.value, password.current.value);
    if (name.current.value && mail.current.value && password.current.value) {
      localStorage.setItem('name', name.current.value)
      localStorage.setItem('mail', mail.current.value)
      localStorage.setItem('password', password.current.value)
      localStorage.setItem('signUp', mail.current.value)
      alert("Успешное регистрация")
    }
  }
  return (
    <div className='Menu'>
      {showHome? window.location = '/' :
      <div className='container'>
        <div className='input_space'>
          <input type="text" placeholder='Name' ref={name} />
        </div >
        <div className='input_space'>
          <input type="text" placeholder='Email' ref={mail} />
        </div>
        <div className='input_space'>
          <input type="password" placeholder='Name' ref={password} />
        </div>
        <button onClick={handleClick}>Sign Up</button>
      </div>}
    </div>
  )
}

export default Registration
