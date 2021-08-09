import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Create Account
          </NavLink>
          <NavLink to='/events' activeStyle>
            Account List
          </NavLink>
  
          <NavLink to='/team' activeStyle>
            RecentAccount(stateless,subject)
          </NavLink>
          <NavLink to='/LocalStorage' activeStyle>
            LocalStorage(total accounts inc)
          </NavLink>
          <NavLink to='/Home' activeStyle>
            Logout
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;