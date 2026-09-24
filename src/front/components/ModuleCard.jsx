import { Link } from "react-router-dom"

const ModuleCard = ({ path, data, order, userType, userProgress }) => {

    const verifyProgress = (lesson) => {
        const progress = userProgress?.find(progress => progress.lesson_id === lesson.id);
        if (!progress) return false;

        return progress.is_completed;
    }

    return <div className="card h-100 border-0 shadow-sm">
        <div className="card-header bg-white border-0 pt-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="badge bg-primary-subtle text-primary-emphasis rounded-pill px-3">
                    Módulo {order}
                </span>
                <span className="text-muted small">
                    {data?.lessons.length} {data?.lessons.length === 1 ? "lección" : "lecciones"}
                </span>
            </div>
            <h4 className="fw-bold mb-0">{data?.title}</h4>
        </div>
        <ul className="list-group list-group-flush h-100">
            {data?.lessons.sort((a, b) => a.id - b.id).map((lesson, index) => {
                return <li key={lesson.id} className="list-group-item container py-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col d-flex align-items-center">
                            {verifyProgress(lesson) ?
                                <i className="fa-solid fa-circle-check fa-xl text-success"></i>
                                : <i className="fa-regular fa-file-lines fa-xl text-secondary"></i>}
                            <div className="d-flex flex-column justify-content-center ms-3">
                                <h6 className="m-0">{lesson.title}</h6>
                            </div>
                        </div>
                        {userType === "student" ?
                            <div className="col-auto">
                                {verifyProgress(lesson) ?
                                    <Link to={`/lesson/${path}/${lesson.id}`}
                                        className="btn btn-outline-success btn-sm py-1 rounded-pill">
                                        Repasar <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    : <Link to={`/lesson/${path}/${lesson.id}`}
                                        className="btn btn-outline-primary btn-sm py-1 rounded-pill">
                                        Leer Lección <i className="fa-solid fa-arrow-right"></i>
                                    </Link>}
                            </div>
                            : userType === "admin" ?
                                <div className="col-auto"><Link to={`/lesson/${path}/${lesson.id}`}
                                    className="btn btn-outline-secondary btn-sm py-1 rounded-pill">
                                    Ver Lección</Link></div> : ""}
                    </div>
                </li>
            })}
        </ul>
        <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center py-3">
            <span className="text-muted small">
                <i className="fa-solid fa-graduation-cap"></i> Evaluación del módulo
            </span>
            <div>
                {data?.lessons?.length === 0 ?
                    <span className="text-muted small">Sin lecciones aún</span>
                    : userType === "student" ?
                        <Link to={`/quizzes/${data.lessons[data.lessons.length - 1].id}`} className="btn btn-primary btn-sm py-1 rounded-pill px-3">
                            Realizar Quiz <i className="fa-solid fa-play fa-2xs ms-1"></i>
                        </Link>
                        : userType === "admin" ?
                            <Link to={`/quizzes/${data.lessons[data.lessons.length - 1].id}`} className="btn btn-outline-secondary btn-sm py-1 rounded-pill px-3">
                                Ver Quiz
                            </Link> : ""}
            </div>
        </div>
    </div>
}

export default ModuleCard;