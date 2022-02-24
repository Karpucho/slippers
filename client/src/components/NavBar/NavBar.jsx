import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Домой</Link>
        </li>
        <li>
          <Link to="/signup">Зарегистрироваться</Link>
        </li>
        <li>
          <Link to="/signin">Войти</Link>
        </li>
        <li>
          <Link to="/logout">Выйти</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
