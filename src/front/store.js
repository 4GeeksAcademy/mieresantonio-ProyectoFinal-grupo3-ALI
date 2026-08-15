export const initialStore = () => {
  return {
    message: null,
    token: null,
    user: null,
    modules: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    // Se deja el set_hello por si la plantilla lo usa de prueba
    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    // Guardar los módulos cuando vengan del backend
    case "set_modules":
      return {
        ...store,
        modules: action.payload,
      };

    // Guarda el token al iniciar sesión
    case "set_token":
      return {
        ...store,
        token: action.payload,
      };

    // Limpia los datos al cerrar sesión
    case "logout":
      return {
        ...store,
        token: null,
        user: null,
      };

    default:
      throw Error("Unknown action.");
  }
}
