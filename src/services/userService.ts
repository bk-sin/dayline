import api from "./api";
import type { User, Post } from "@/types/user";

// Servicio para operaciones relacionadas con usuarios
export const userService = {
  // Obtener todos los usuarios
  getUsers: async (): Promise<User[]> => {
    const response = await api.get<User[]>("/users");
    return response.data;
  },

  // Obtener un usuario por ID
  getUserById: async (id: number): Promise<User> => {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  },

  // Obtener posts de un usuario
  getUserPosts: async (userId: number): Promise<Post[]> => {
    const response = await api.get<Post[]>(`/users/${userId}/posts`);
    return response.data;
  },

  // Crear un nuevo usuario
  createUser: async (userData: Omit<User, "id">): Promise<User> => {
    const response = await api.post<User>("/users", userData);
    return response.data;
  },

  // Actualizar un usuario
  updateUser: async (id: number, userData: Partial<User>): Promise<User> => {
    const response = await api.put<User>(`/users/${id}`, userData);
    return response.data;
  },

  // Eliminar un usuario
  deleteUser: async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
  },
};
