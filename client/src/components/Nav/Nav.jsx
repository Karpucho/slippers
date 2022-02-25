import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav() {

 

  return (
    <>
 
    <ul>
      <li> <Link to='/registration'>Регистрация</Link> </li>
      <li> <Link to='/login'>Логин</Link> </li>
      {/* <li> <Link to='/success'>Успех</Link> </li> */}
      <li> <Link to='/logout'>Выход</Link> </li>
      <li> <Link to='/'>Домой</Link> </li>
    </ul> 

</>
  );
}

export default Nav;
