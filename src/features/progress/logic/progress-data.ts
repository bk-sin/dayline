import { WEEKLY_DATA } from "../__mocks__/progress";
import type { WeeklyRow } from "../types";

/**
 * Get weekly progress data.
 * In development, returns mock data.
 * In production, this would fetch from API.
 */
export function getWeeklyData(): WeeklyRow[] {
  // TODO: Replace with real API call when backend is ready
  return WEEKLY_DATA;
}
