import React from 'react';
import { 
	NavContainer,
	NavList,
	NavItem,
	Logo,
	BookIcon,
	NavLink,
 } from './styled';


const Navbar = () => {
	return (
		<NavContainer>
		  <BookIcon />
		  <Logo>
		    PubMedAPI
		  </Logo>
		  <NavList>
		    <NavItem>
		      <NavLink to="/">
		        Home
		      </NavLink>
		    </NavItem>
		    <NavItem>
		      <NavLink to="/browse">
		        Browse Articles
		      </NavLink>
		    </NavItem>
		    <NavItem>
		      <NavLink to="/bookmarks">
		        Bookmarks
		      </NavLink>
		    </NavItem>
		  </NavList>
		</NavContainer>
	)
}


export default Navbar;
