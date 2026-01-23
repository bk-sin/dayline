import { createMMKV } from "react-native-mmkv";
import type { DayEntry } from "../types";

// Create a dedicated MMKV instance for day-tracking (v3 API)
const storage = createMMKV({
  id: "dayline-storage",
});

const STORAGE_KEY = "dayline:history";

/**
 * Save a day entry to MMKV storage.
 * Appends to existing history array.
 */
export function saveDayEntry(entry: DayEntry): void {
  const existing = loadDayHistory();
  const updated = [...existing, entry];
  storage.set(STORAGE_KEY, JSON.stringify(updated));
}

/**
 * Load all day entries from MMKV storage.
 * Returns empty array if no data exists.
 */
export function loadDayHistory(): DayEntry[] {
  const raw = storage.getString(STORAGE_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as DayEntry[];
  } catch (error) {
    console.error("Failed to parse day history from MMKV:", error);
    return [];
  }
}

/**
 * Clear all day entries from MMKV storage.
 * Useful for testing or reset functionality.
 */
export function clearDayHistory(): void {
  storage.remove(STORAGE_KEY);
}
