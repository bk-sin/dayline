// src/features/day-tracking/hooks/useDayHistory.ts
import { useState, useCallback, useEffect } from "react";
import {
  getBetterThanPercentage,
  loadDayHistory,
  saveDayEntry,
} from "@/features/day-tracking/logic";
import { DayEntry } from "../types";

export const useDayHistory = () => {
  const [history, setHistory] = useState<DayEntry[]>([]);

  // Load history from MMKV on mount
  useEffect(() => {
    const loaded = loadDayHistory();
    setHistory(loaded);
  }, []);

  const saveDay = useCallback((newDay: DayEntry) => {
    setHistory((prevHistory) => {
      return [...prevHistory, newDay];
    });

    // Persist to MMKV storage
    saveDayEntry(newDay);
  }, []);

  // Function to get the insight string for a specific day
  const getInsightForDay = useCallback(
    (day: DayEntry) => {
      const percentage = getBetterThanPercentage(day, history);
      return `Better than ${percentage}% of your past days`;
    },
    [history],
  );

  return {
    history,
    saveDay,
    getInsightForDay,
  };
};
