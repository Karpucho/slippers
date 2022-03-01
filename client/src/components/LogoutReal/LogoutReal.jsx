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
    navigate('/')
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
