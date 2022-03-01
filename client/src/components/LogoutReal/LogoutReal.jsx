import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUserAC } from "../../redux/actionCreators/usersAC";

import Logout from "@mui/icons-material/Logout";
import { MenuItem, ListItemIcon } from "@mui/material";

function LogoutReal(props) {
  const dispatch = useDispatch();
  // const {user} = useSelector(state=> usersReducer.)
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userData");
    dispatch(logoutUserAC());
    alert("Вы успешно вышли из системы!");
  };

  // useEffect(()=> {
  //   fetch('http://localhost:5000/api/logout', {
  //     credentials: 'include',
  //   })
  //   .then( res => res.json())
  //   .then(data => window.alert(data.message))
  //   .catch(console.error())

  //   navigate('/')
  // }
  return (
    <MenuItem onClick={logout}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Выйти
    </MenuItem>
  );
}

export default LogoutReal;
