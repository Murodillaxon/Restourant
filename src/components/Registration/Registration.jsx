import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const Registration = () => {
  const name = useRef();
  const mail = useRef();
  const password = useRef();

  const [showHome, setShowHome] = useState(false);
  const localSignUp = localStorage.getItem('signUp');
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
  }, [localSignUp]);

  const handleClick = () => {
    if (name.current.value && mail.current.value && password.current.value) {
      localStorage.setItem('name', name.current.value);
      localStorage.setItem('mail', mail.current.value);
      localStorage.setItem('password', password.current.value);
      localStorage.setItem('signUp', mail.current.value);
      alert('Успешная регистрация');
    }
  };

  return (
    <div className={showHome ? 'hidden' : 'registration-container'}>
      <div className='registration-form'>
        <h2>Регистрация</h2>
        <div className='input-space'>
          <input type="text" placeholder='Имя' ref={name} />
        </div>
        <div className='input-space'>
          <input type="text" placeholder='Email' ref={mail} />
        </div>
        <div className='input-space'>
          <input type="password" placeholder='Пароль' ref={password} />
        </div>
        <button onClick={handleClick}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Registration;
