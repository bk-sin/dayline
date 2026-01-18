import axios from "axios";

// Configuración base de Axios
const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para requests - agregar token si existe
api.interceptors.request.use(
  (config) => {
    // Aquí puedes agregar el token de autenticación
    // const token = await getStoredToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptor para responses - manejo de errores global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // El servidor respondió con un código de error
      switch (error.response.status) {
        case 401:
          // Token inválido o expirado
          console.log("Usuario no autenticado");
          break;
        case 403:
          console.log("No tienes permisos");
          break;
        case 404:
          console.log("Recurso no encontrado");
          break;
        case 500:
          console.log("Error del servidor");
          break;
      }
    } else if (error.request) {
      // La petición se hizo pero no hubo respuesta
      console.log("Sin conexión al servidor");
    }
    return Promise.reject(error);
  },
);

export default api;
