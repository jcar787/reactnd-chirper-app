import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" exact activeName="active">
            New Tweet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
