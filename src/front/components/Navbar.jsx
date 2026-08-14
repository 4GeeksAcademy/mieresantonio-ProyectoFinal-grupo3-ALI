import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Plataforma Blockchain</span>
				</Link>
				<div className="ml-auto d-flex gap-2">
					<Link to="/dashboard" className="btn btn-outline-primary">
						Dashboard
					</Link>

					<Link to="/login" className="btn btn-primary">
						Iniciar Sesión
					</Link>
				</div>
			</div>
		</nav>
	);
};