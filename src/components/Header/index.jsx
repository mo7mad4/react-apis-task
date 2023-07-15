import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { PATHS } from '../../router/paths';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <h1>Header</h1>

        <nav>
          <ul>
            <li>
              <NavLink to={PATHS.HOME}>
                {({ isActive, isPending }) => (isActive ? <u>Home</u> : 'Home')}
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.ABOUT}>
                {({ isActive, isPending }) =>
                  isActive ? <u>About</u> : 'About'
                }
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.STORES.ROOT}>
                {({ isActive, isPending }) =>
                  isActive ? <u>Stores</u> : 'Stores'
                }
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;