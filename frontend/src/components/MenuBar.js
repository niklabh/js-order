
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import firebase from 'firebase/app';
import React, { useContext } from 'react';

import { UserContext } from '../context/User';
import logo from '../assets/logo.png';

const MenuBar = ({ className }) => {
	const { loggedIn } = useContext(UserContext);

	const handleLogout = (e) => {
		e.preventDefault();
		firebase.auth().signOut().catch(function(error) {
			console.error("Error in sign out", error);
		});
	};

	return (
		<Menu className={className} stackable inverted borderless>
			<Menu.Item as={NavLink} to="/" className='logo' id='title'><img alt='Polkassembly Logo' src={logo} /></Menu.Item>
			<Menu.Menu position="right">
				{loggedIn
					? <>
						<Menu.Item as={NavLink} className='user_items' content='Orders' to='/orders' />
						<Menu.Item as={NavLink} className='user_items' content='Create' to='/create-order' />
						<Menu.Item as={NavLink} className='user_items' content='Logout' to='#' onClick={handleLogout} />
					</>
					: <Menu.Item as={NavLink} className='user_items' content='Login' to='/login' />
				}
			</Menu.Menu>
		</Menu>
	);
};

export default styled(MenuBar)`
	&.ui.menu, .ui.inverted.menu {
		font-family: Roboto;
		background-color: #000;
		border-radius: 0rem;
		letter-spacing: 0.2px;

		& a.active {
			outline: none;
			background-color: #000 !important;
		}
		.item {
			color: #A6ACB3;
			font-weight: 500;
			&:hover {
				color: white;
			}
		}

		i.icon {
			color: #A6ACB3;
		}

		.logo {
			img {
				width: 16rem;

				@media only screen and (max-width: 992px) {
					width: 10rem;
				}
			}
			background-color: #000 !important;
		}
	}

	&.ui.menu {
		padding: 0.5rem 2rem;
		font-size: 1.5rem;
		.item {
			padding: 0.5rem 0.5rem;
			margin: 0 1.2rem;
			:hover {
				background-color: #000 !important;
			}
		}

		.ui.dropdown .menu>.item,
		.ui.dropdown .menu>.active.item {
			font-size: 1.5rem !important;
			font-weight: 400 !important;
		}
	}

	.desktop_items, .user_items, #title {
		i.icon {
			display: none;
		}
		i.icon.caret {
			display: block;
		}
	}


	&.ui.inverted.menu a.item:hover, &.ui.inverted.menu .dropdown.item:hover {
		border-radius: 0.5rem;
	}
`;
