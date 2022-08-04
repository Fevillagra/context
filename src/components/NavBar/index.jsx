import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import './navBar.css';

const NavBar = () => {
	return (
		<div className="containernav">
			<nav className="nav">
				<ul className="nav__list">
					<li>
						<NavLink className="nav__link" to="/">
							<p>Firemovie's <i className="fa-solid fa-fire coloricon"></i></p>
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to="/categoria/films">
							Películas
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to="/categoria/series">
							Series
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to="cart" id="cartLink">
							<CartWidget />
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
