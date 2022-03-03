import React, { Component } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import { MenuItem, ListItemIcon } from "@mui/material";



function LogoutReal(props) {
  const dispatch = useDispatch();
  // const {user} = useSelector(state=> usersReducer.)
  const navigate = useNavigate();

  const logout = (e) => {
    // e.preventDefault();
    // const { cookies } = this.props;
    dispatch({
      type: "FETCH_LOGOUT_USER",
    });
    // cookies.remove('refreshToken')
    alert("Вы успешно вышли из системы!");
    navigate("/");
  };

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
