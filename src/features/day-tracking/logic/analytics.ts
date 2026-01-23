import { DayEntry } from "../types";
import { calculateScore } from "./scoring";

export const getBetterThanPercentage = (
  currentEntry: DayEntry,
  history: DayEntry[],
): number => {
  // Edge case: No history
  if (!history || history.length === 0) return 0;

  const currentScore = calculateScore(currentEntry);

  // Filter out the current day if it exists in history to avoid self-comparison
  const pastDays = history.filter((d) => d.date !== currentEntry.date);

  if (pastDays.length === 0) return 0;

  // Count days with LOWER score than today
  let worseDaysCount = 0;

  pastDays.forEach((day) => {
    const pastScore = calculateScore(day);
    if (currentScore > pastScore) {
      worseDaysCount++;
    }
  });

  // Calculate percentage
  return Math.round((worseDaysCount / pastDays.length) * 100);
};
