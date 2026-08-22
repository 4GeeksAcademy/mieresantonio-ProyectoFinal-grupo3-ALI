// TODO (conectar con backend): esta función hoy devuelve datos de ejemplo (mock).
// Cuando el backend agregue level, description, duration_hours y tags a LearningPath,
// esta es la ÚNICA función que hay que cambiar por un fetch real a /api/learning-paths.
// Ningún componente visual (CourseCard, Courses.jsx) debería necesitar cambios.

const MOCK_COURSES = [
	{
		id: 1,
		title: "Fundamentos de Blockchain",
		description:
			"Comprende la arquitectura descentralizada, criptografía básica y el mecanismo de consenso detrás de Bitcoin y Ethereum.",
		level: "Principiante",
		duration_hours: 4,
		lessons_count: 4,
		modules_count: 2,
		tag: "Blockchain",
	},
	{
		id: 2,
		title: "Desarrollo de Smart Contracts",
		description:
			"Aprende Solidity desde cero. Crea, prueba y despliega contratos inteligentes seguros en la Ethereum Virtual Machine.",
		level: "Intermedio",
		duration_hours: 10,
		lessons_count: 2,
		modules_count: 2,
		tag: "Solidity",
	},
	{
		id: 3,
		title: "Arquitectura DeFi & Protocolos",
		description:
			"Análisis profundo de Automated Market Makers (AMMs), Liquidity Pools y estrategias para mitigar ataques y vulnerabilidades.",
		level: "Avanzado",
		duration_hours: 8,
		lessons_count: 1,
		modules_count: 1,
		tag: "DeFi",
	},
];

// Simula una llamada async, así el componente que la use ya queda listo
// para cuando esto sea un fetch real (misma forma: una promesa que resuelve un array).
export const getCourses = async () => {
	return Promise.resolve(MOCK_COURSES);
};
