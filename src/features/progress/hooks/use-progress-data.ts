import { useMemo } from "react";
import { getWeeklyData } from "../logic";

/**
 * Hook to fetch and manage progress data.
 * Returns weekly data, loading state, and error (when API is ready).
 */
export function useProgressData() {
  const weeklyData = useMemo(() => getWeeklyData(), []);

  return {
    weeklyData,
    isLoading: false, // TODO: Add loading state when API is connected
    error: null, // TODO: Add error handling when API is connected
  };
}
