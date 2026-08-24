import React, { useState } from "react";

export const Admin = () => {
    const [formAbierto, setFormAbierto] = useState(null);
    const stats = {
        rutas: 4,
        modulos: 6,
        lecciones: 8,
        usuarios: 2
    };

    const rutas = [
        {
            id: 1,
            titulo: "Fundamentos de Blockchain",
            nivel: "Principiante",
            lecciones: ["¿Qué es Bitcoin?", "Wallets y claves privadas"]
        },
        {
            id: 2,
            titulo: "Introducción a DeFi",
            nivel: "Intermedio",
            lecciones: ["¿Qué es un DEX?"]
        }
    ];

    return (
        <div className="container py-4">
            <div className="d-flex align-items-center gap-2 mb-1">
                <h2 className="fw-bold mb-0">Panel de Administración</h2>
                <span className="badge bg-danger rounded-pill">ADMIN</span>
            </div>
            <p className="text-secondary small">
                Administra rutas, módulos y lecciones de la plataforma.
            </p>

            <div className="row g-3 mb-4">
                <div className="col-6 col-lg-3">
                    <div className="card border p-3">
                        <div className="text-secondary small text-uppercase">Rutas</div>
                        <div className="fs-4 fw-bold">{stats.rutas}</div>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="card border p-3">
                        <div className="text-secondary small text-uppercase">Módulos</div>
                        <div className="fs-4 fw-bold">{stats.modulos}</div>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="card border p-3">
                        <div className="text-secondary small text-uppercase">Lecciones</div>
                        <div className="fs-4 fw-bold">{stats.lecciones}</div>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="card border p-3">
                        <div className="text-secondary small text-uppercase">Usuarios</div>
                        <div className="fs-4 fw-bold">{stats.usuarios}</div>
                    </div>
                </div>
            </div>
            <div className="card border">
                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold mb-0">Rutas de aprendizaje</h5>
                    <button className="btn btn-dark btn-sm rounded-pill px-3">
                        + Nueva ruta
                    </button>
                </div>
                <div className="card-body">
                    {rutas.map((ruta) => (
                        <div className="border rounded p-3 mb-3" key={ruta.id}>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <span className="fw-bold">{ruta.titulo}</span>
                                    <span className="badge bg-dark rounded-pill ms-2">{ruta.nivel}</span>
                                </div>
                                <button
                                    className="btn btn-sm btn-outline-dark rounded-pill"
                                    onClick={() => setFormAbierto(formAbierto === ruta.id ? null : ruta.id)}
                                >
                                    {formAbierto === ruta.id ? "Cancelar" : "+ Lección"}
                                </button>
                            </div>
                            {ruta.lecciones.map((leccion, i) => (
                                <div className="small text-secondary py-1" key={i}>
                                    {i + 1}. {leccion}
                                </div>
                            ))}
                            {formAbierto === ruta.id && (
                                <div className="border-top mt-3 pt-3">
                                    <div className="mb-2">
                                        <label className="form-label small fw-bold">Título de la lección</label>
                                        <input type="text" className="form-control form-control-sm" placeholder="Ej. Qué es una llave privada" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label small fw-bold">Contenido</label>
                                        <textarea className="form-control form-control-sm" rows="4" placeholder="Escribe el contenido de la lección..."></textarea>
                                    </div>
                                    <button className="btn btn-dark btn-sm rounded-pill px-3">
                                        Guardar lección
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};