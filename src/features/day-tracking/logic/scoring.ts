import { POINTS } from "../config";
import { DayEntry } from "../types";

export const calculateScore = (entry: DayEntry): number => {
  let score = 0;

  if (entry.didWorkout) score += POINTS.WORKOUT;
  if (entry.workedOnProject) score += POINTS.PROJECT;
  if (entry.ateHealthy) score += POINTS.HEALTHY_FOOD;
  if (entry.drankAlcohol) score += POINTS.ALCOHOL;

  return score;
};
