import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MyContext from '../my_context';

export default function NavbarPropio() {
	const { total } = useContext(MyContext);

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
					<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} end to="/carrito">
						<img width="40" src="/carrito.png" alt="" />
						$ {total}
					</NavLink>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
