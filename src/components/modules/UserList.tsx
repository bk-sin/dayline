import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useUsers } from "@/hooks/useUsers";
import type { User } from "@/types/user";

/**
 * Ejemplo de componente usando TanStack Query
 * Este componente muestra cómo consumir datos de una API
 */
export function UserList() {
  const { data: users, isLoading, isError, error, refetch } = useUsers();

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Cargando usuarios...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
        <TouchableOpacity style={styles.button} onPress={() => refetch()}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderUser = ({ item }: { item: User }) => (
    <View style={styles.userCard}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
      <Text style={styles.userPhone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUser}
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  userCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  userPhone: {
    fontSize: 14,
    color: "#999",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
