import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
	return (
		<IconContext.Provider value={{ color: '#272343' }}>
			<Nav>
				<NavbarContainer>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks exact activeClassName="active" to="/">
								Add Image
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks exact activeClassName="active" to="/my-photobook">
								My Photobook
							</NavLinks>
						</NavItem>

						<NavItem>
							<NavLinks exact activeClassName="active" to="/manage-photos">
								Manage Photos
							</NavLinks>
						</NavItem>
		
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;