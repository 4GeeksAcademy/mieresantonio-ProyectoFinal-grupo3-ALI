import React, { useState } from "react";

export const Login = () => {
    // Estado para controlar los inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Esta función maneja el envío sin recargar la página
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos listos para enviar al backend:", { email, password });
        // Aquí luego se verá si colocamos una API
    };

    return (
        <div className="card p-4 shadow-sm w-100" style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h3 className="text-center mb-4">Iniciar Sesión</h3>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary w-100">
                    Entrar
                </button>
            </form>
        </div>
    );
};