import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/services/userService";
import type { User } from "@/types/user";

// Hook para obtener todos los usuarios
export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: userService.getUsers,
  });
}

// Hook para obtener un usuario por ID
export function useUser(id: number) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => userService.getUserById(id),
    enabled: !!id, // Solo ejecutar si hay un ID válido
  });
}

// Hook para obtener posts de un usuario
export function useUserPosts(userId: number) {
  return useQuery({
    queryKey: ["user", userId, "posts"],
    queryFn: () => userService.getUserPosts(userId),
    enabled: !!userId,
  });
}

// Hook para crear un usuario (mutación)
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: Omit<User, "id">) =>
      userService.createUser(userData),
    onSuccess: () => {
      // Invalidar la caché de usuarios para refrescar la lista
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

// Hook para actualizar un usuario
export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<User> }) =>
      userService.updateUser(id, data),
    onSuccess: (_, variables) => {
      // Invalidar tanto la lista como el usuario específico
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user", variables.id] });
    },
  });
}

// Hook para eliminar un usuario
export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => userService.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
