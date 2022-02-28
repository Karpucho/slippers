import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const inputEmail = useRef();
  const inputPassword = useRef();

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { user} = useSelector(state => state.usersReducer.user.userData)
  console.log('userLogin', user);

  const formHandler = (e) => {
    e.preventDefault();
    const user = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };
    dispatch({type:'FETCH_LOGIN_USER', payload: user})
  };

  return (
    <form onSubmit={formHandler} style={{display:'flex', flexDirection: 'column', marginBottom:'10px'}}>
      <input ref={inputEmail} placeholder="email" />
      <input ref={inputPassword} placeholder="password" />
      <button>Логин</button>
    </form>
  );
}

export default Login;
