import React from "react";
import { Link } from "react-router-dom";

// Los colores del badge de sus niveles, según el diseño.
const LEVEL_BADGE_CLASS = {
	Principiante: "bg-info-subtle text-info-emphasis",
	Intermedio: "bg-warning-subtle text-warning-emphasis",
	Avanzado: "bg-danger-subtle text-danger-emphasis",
};

export const CourseCard = ({ course }) => {
	const badgeClass = LEVEL_BADGE_CLASS[course.level] || "bg-secondary-subtle";

	return (
		<div className="card h-100 shadow-sm">
			{/* TODO (conectar con backend): reemplazar por course.image_url cuando exista */}
			<div className="bg-dark" style={{ height: "160px" }}></div>

			<div className="card-body d-flex flex-column">
				<div className="d-flex justify-content-between align-items-center mb-2">
					<span className={`badge ${badgeClass}`}>{course.level}</span>
					<small className="text-muted">
						<i className="fa-regular fa-clock me-1"></i>
						{course.duration_hours}h
					</small>
				</div>

				<h5 className="card-title">{course.title}</h5>
				<p className="card-text text-muted flex-grow-1">
					{course.description}
				</p>

				<div className="d-flex justify-content-between align-items-center mt-3">
					<span className="badge bg-light text-dark border">{course.tag}</span>
					{/* TODO (conectar con nuestro líder Luis ): hay que confirmar que esta ruta coincida
					    con la que Luis registre para la página de detalle del curso. */}
					<Link
						to={`/courses/${course.id}`}
						className="btn btn-dark btn-sm"
					>
						Ver Temario
					</Link>
				</div>
			</div>
		</div>
	);
};
