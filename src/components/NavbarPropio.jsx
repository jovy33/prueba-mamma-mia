import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export default function NavbarPropio() {
	return (
		<Navbar bg="info" variant="dark">
			<Container>
				<Navbar.Brand>
					<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} end to="/">
						<img width="40" src="/pizza.png" alt="" />
						Pizzeria Mamma Mía!
					</NavLink>
				</Navbar.Brand>
				<Navbar.Collapse className="justify-content-end">
					<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} end to="/pokemones">
						<img width="40" src="/carrito.png" alt="" />
						$
					</NavLink>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
