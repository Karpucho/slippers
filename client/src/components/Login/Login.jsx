import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const inputEmail = useRef();
  const inputPassword = useRef();

  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    const user = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    }
    fetch('http://localhost:5000/api/login',
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
      <button onClick={login}>Логин</button>

    </form>
  );
}

export default Login;
