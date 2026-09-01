import { Link, useNavigate } from "react-router-dom";
import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch({ type: "logout" });
		localStorage.removeItem("token");
		navigate("/");
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Plataforma Blockchain</span>
				</Link>
				<div className="ml-auto d-flex gap-2">
					<Link to="/courses" className="btn btn-outline-dark">
						Explorar Rutas
					</Link>

					{store.token ? (
						<>
							<Link to="/dashboard" className="btn btn-outline-primary">
								Dashboard
							</Link>
							<button className="btn btn-outline-danger" onClick={handleLogout}>
								Cerrar Sesión
							</button>
						</>
					) : (
						<>
							<Link to="/register" className="btn btn-outline-primary">
								Registrarse
							</Link>
							<Link to="/login" className="btn btn-primary">
								Iniciar Sesión
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};
