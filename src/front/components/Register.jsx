import React, { useState } from "react";

export const Register = () => {
    // Estados para tres areas que pide la base de datos
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nuevo usuario a registrar:", { username, email, password });
        // Aquí conectaremos en su momento con el endpoint POST /users
    };

    return (
        <div className="card p-4 shadow-sm w-100" style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h3 className="text-center mb-4">Crear Cuenta</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre de Usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej: cripto_ninja"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="estudiante@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Aqui react controla el input
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Aqui react controla el input
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">
                    Registrarse
                </button>
            </form>
        </div>
    );
};