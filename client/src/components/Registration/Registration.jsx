import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration(props) {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputRole = useRef();

  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    const user = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      role: inputRole.current.value,
    }
    fetch('http://localhost:5000/api/registration',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(console.error())

    navigate('/')

  }

  return (
    <form>

        <input ref={inputEmail} placeholder='email'/>
        <input ref={inputPassword} placeholder='password'/>
        <input ref={inputRole} placeholder='role'/>
        <button onClick={register}>Рега</button>

    </form>
  );
}

export default Registration;
