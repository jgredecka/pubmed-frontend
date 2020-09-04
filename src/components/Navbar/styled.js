import styled from 'styled-components';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link } from 'react-router-dom';


const NavContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 250px;
	height: 100%;
	background-color: #4a8ee8;
	text-align: center;
	padding-top: 20px;
	color: #ffff;
`

const Logo = styled.h1`
	padding-bottom: 25px;
`

const NavList = styled.ul`
	padding: 0;
	text-transform: uppercase;
	letter-spacing: 1.5px;
`

const NavItem = styled.li`
	list-style: none;
	padding-bottom: 25px;
`

const NavLink = styled(Link)`
	color: #ffff;
	text-decoration: none;
	&:visited {
        color: #ffff;
    }
    &:active {
        color: #ffff;
    }
`

const BookIcon = styled(MenuBookIcon)`
	&& {
		font-size: 40px;
	}
`

export {
	NavContainer,
	NavList,
	NavItem,
	Logo,
	BookIcon,
	NavLink,
}