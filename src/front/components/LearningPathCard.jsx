import { Link } from "react-router-dom";

const LEVEL_BADGE_CLASS = {
    Principiante: "bg-info-subtle text-info-emphasis",
    Intermedio: "bg-warning-subtle text-warning-emphasis",
    Avanzado: "bg-danger-subtle text-danger-emphasis",
};

const LearningPathCard = ({ data }) => {
    const badgeClass = LEVEL_BADGE_CLASS[data.level] || "bg-secondary-subtle";

    return <div className="card h-100 border-0 shadow-sm">
        <img className="card-img-top" src={data.image_url} alt={data.title}
            style={{ height: "160px", objectFit: "cover" }} />
        <div className="card-body d-flex flex-column">
            <div className="mb-2">
                <span className={`badge ${badgeClass}`}>{data.level}</span>
            </div>
            <h5 className="card-title fw-bold">{data.title}</h5>
            <p className="card-text text-muted flex-grow-1">{data.description}</p>
            <div className="d-flex justify-content-between align-items-center mt-2">
                <small className="text-muted">
                    <i className="fa-solid fa-book-open me-1"></i>
                    {data.number_of_modules} {data.number_of_modules === 1 ? "Módulo" : "Módulos"}
                </small>
                <small className="text-muted">
                    <i className="fa-regular fa-clock me-1"></i>{data.time_required}
                </small>
            </div>
            <Link to={`/course/${data.id}`} className="btn btn-primary btn-sm rounded-pill mt-3">
                Ver Temario
            </Link>
        </div>
    </div>
}

export default LearningPathCard;