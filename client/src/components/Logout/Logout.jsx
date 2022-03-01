import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Logout(props) {
  const dispatch = useDispatch()
  // const {user} = useSelector(state=> usersReducer.)
  const navigate = useNavigate();

  // useEffect(()=> {
  //   fetch('http://localhost:5000/api/logout', {
  //     credentials: 'include',
  //   })
  //   .then( res => res.json())
  //   .then(data => window.alert(data.message))
  //   .catch(console.error())

  //   navigate('/')
  // })
  

  return (
    <div>
      {/* 1 */}
    </div>
  );
}

export default Logout;
